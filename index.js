const EffectiveLevelCalculator = require('./src/calculator/EffectiveLevelCalculator');
const AttackStrengthProgressionDeterminant = require('./src/AttackStrengthProgressionDeterminant');
const MeleeDamagePerHitCalculator = require('./src/calculator/MeleeDamagePerHitCalculator');
const MaxHitCalculator = require('./src/calculator/MaxHitCalculator');
const MaxRollCalculator = require('./src/calculator/MaxRollCalculator');
const AccuracyCalculator = require('./src/calculator/AccuracyCalculator');
const LevelExperienceCalculator = require('./src/calculator/LevelExperienceCalculator');
const Combattant = require('./src/model/Combattant');
const Prayer = require('./src/model/Prayer');
const Stance = require('./src/model/Stance');
const Equipment = require('./src/model/Equipment');
const SpecialEquipment = require('./src/model/SpecialEquipment');

const meleeDamagePerHitCalculator = new MeleeDamagePerHitCalculator(
    new EffectiveLevelCalculator(),
    new MaxHitCalculator(),
    new MaxRollCalculator(),
    new AccuracyCalculator()
);
const levelExperienceCalculator = new LevelExperienceCalculator();

const attackStrengthProgressionDeterminant = new AttackStrengthProgressionDeterminant(
    meleeDamagePerHitCalculator,
    levelExperienceCalculator,
    profileSlayerAbyssalWhip,
    profileSlayerAbyssalDagger
);

attackStrengthProgressionDeterminant.calculatePaths(83, 90);

// ----



function profileSlayerAbyssalDagger(levels) {
    return new Combattant(
        levels,
        new Prayer(1.2, 1.25, 1.17),
        new Stance(0, 3, 0),
        new Equipment(122, 101, 0),
        new SpecialEquipment(1.1667, 1.1667)
    );
}

function profileSlayerAbyssalWhip(levels) {
    return new Combattant(
        levels,
        new Prayer(1.2, 1.25, 1.17),
        new Stance(3, 0, 0),
        new Equipment(128, 108, 0),
        new SpecialEquipment(1.1667, 1.1667)
    );
}

function profileSlayerAbyssalDaggerBonecrusher(levels) {
    return new Combattant(
        levels,
        new Prayer(1.2, 1.25, 1.17),
        new Stance(0, 3, 0),
        new Equipment(112, 93, 0),
        new SpecialEquipment(1.1667, 1.1667)
    );
}

function profileSlayerAbyssalWhipBonecrusher(levels) {
    return new Combattant(
        levels,
        new Prayer(1.2, 1.25, 1.17),
        new Stance(3, 0, 0),
        new Equipment(118, 100, 0),
        new SpecialEquipment(1.1667, 1.1667)
    );
}
