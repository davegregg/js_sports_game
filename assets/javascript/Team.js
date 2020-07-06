class Team {

    constructor (name) {
        // this = {}   // "this instance" or "this particular team"

        this.name = name
        this.shots = 0
        this.goals = 0

        // return this
    }

    shoots () {
        return this.shots += 1
    }

    getGoals () {
        return this.goals
    }

    scoresGoal () {
        return this.goals += 1
    }

    checkForGoal () {
        const isGoal = (Math.random() * 2) > 1

        if (isGoal) {
            this.scoresGoal()
        }

        return isGoal
    }

    reset () {
        this.shots = 0
        this.goals = 0
    }

}

