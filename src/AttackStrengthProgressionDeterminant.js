const Combattant = require('./model/Combattant');
const Levels = require('./model/Levels');
const Prayer = require('./model/Prayer');
const Stance = require('./model/Stance');
const Equipment = require('./model/Equipment');
const XP_PER_DAMAGE = 4;

module.exports = class AttackStrengthProgressionDeterminant {
    constructor(
        damagePerHitCalculator,
        levelExperienceCalculator,
        attackProfile,
        strengthProfile
    ) {
        this.attackProfile = attackProfile;
        this.strengthProfile = strengthProfile;
        this.damagePerHitCalculator = damagePerHitCalculator;
        this.levelExperienceCalculator = levelExperienceCalculator;
    }

    calculatePaths(attack, strength) {
        const path = new Path(0, []);
        const best = new BestPath(new Path(Infinity, []));

        this.calculateStep(attack, strength, path, best);
    }

    calculateStep(attack, strength, path, best) {
        if (best.isBetterThan(path)) {
            return;
        }

        if (attack < 99) {
            this.calculateStepAttack(attack, strength, path.clone(), best);
        }

        if (strength < 99) {
            this.calculateStepStrength(attack, strength, path.clone(), best);
        }

        if (attack === 99 && strength === 99
            && !best.isBetterThan(path)
        ) {
            best.set(path);
        }
    }

    calculateStepAttack(attack, strength, path, best) {
        const stats = this.calculateByLevel({attack, strength}, this.attackProfile);
        const hits = this.calculateHitsUntilLevel(attack, stats);

        path.push(stats, hits);

        this.calculateStep(attack + 1, strength, path, best);
    }

    calculateStepStrength(attack, strength, path, best) {
        const stats = this.calculateByLevel({attack, strength}, this.strengthProfile);
        const hits = this.calculateHitsUntilLevel(strength, stats);

        path.push(stats, hits);

        this.calculateStep(attack, strength + 1, path, best);
    }

    calculateHitsUntilLevel(level, stats) {
        return this.levelExperienceCalculator.getExperienceUntilNextLevel(level)
            / (stats.low * XP_PER_DAMAGE);
    }

    calculateByLevel(level, profile) {
        const attacker = profile(new Levels(sp(level.attack), sp(level.strength), 70));
        const minDefender = new Combattant(
            new Levels(0, 0, 150),
            new Prayer(1, 1, 1),
            new Stance(1, 1, 1),
            new Equipment(0, 0, 20)
        );
        const maxDefender = new Combattant(
            new Levels(0, 0, 215),
            new Prayer(1, 1, 1),
            new Stance(1, 1, 1),
            new Equipment(0, 0, 80)
        );

        const low = this.damagePerHitCalculator.calculate(attacker, maxDefender);
        const high = this.damagePerHitCalculator.calculate(attacker, minDefender);

        return {
            attack: level.attack,
            strength: level.strength,
            low,
            high,
            avg: (low + high) / 2,
        };
    }
}

function sp(lvl) {
    return Math.floor(5 + lvl * 1.15);
}

class Path {
    constructor(hits, statsList) {
        this.hits = hits;
        this.statsList = statsList;
    }
    push(stats, hits) {
        this.statsList.push(stats);
        this.hits += hits;
    }
    getHits() {
        return this.hits;
    }
    clone() {
        return new Path(this.hits, this.statsList.slice(0));
    }
}

class BestPath {
    constructor(path) {
        this.path = path;
    }

    set(path) {
        this.path = path;

        console.log([path.hits, serializeStatsList(path.statsList)]);
    }

    isBetterThan(path) {
        return this.path.getHits() < path.getHits();
    }
}

function serializeStatsList(statsList) {
    let serialized = '';

    for (const stats of statsList) {
        serialized += `a${stats.attack}s${stats.strength};`;
    }

    return serialized;
}

function csv(x) {
    console.log('"' + x.join('","') + '"');
}
