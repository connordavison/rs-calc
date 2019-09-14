module.exports = class LevelExperienceCalculator {
    getExperienceForLevel(level) {
        let exp = 0;

        for (let i = 1; i < level; i++) {
            exp += Math.floor(i + 300 * Math.pow(2, i / 7));
        }

        return Math.floor(exp / 4);
    }

    getExperienceBetweenLevels(level0, level1) {
        return this.getExperienceForLevel(level1)
            - this.getExperienceForLevel(level0);
    }

    getExperienceUntilNextLevel(level) {
        return this.getExperienceForLevel(level + 1) - this.getExperienceForLevel(level);
    }

    getLevelForExperience(exp) {
        let level = 1;

        for (; level < 100; level++) {
            if (this.getExperienceForLevel(level) > exp) {
                break;
            }
        }

        return level - 1;
    }
}
