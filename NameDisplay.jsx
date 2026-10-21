// After-Effects auto-name script
{
    FetchCharacterName(ref_comp, displayOption)
    {
        const ArrayToDate = (dateArray) => new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
        const Name = class {
            constructor(firstName, lastName, startDate) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.startDate = ArrayToDate(startDate);
            }
        };
        const NameDisplayOption = class {
            static FullName = 1;
            static FirstName = 2;
        };
        const Character = class {
            constructor(birthDate, firstName, initialLastName, otherLastNames = []) {
                this.birthDate = ArrayToDate(birthDate);
                var birthName = new Name(firstName, initialLastName, birthDate);
                this.names = [birthName, ...otherLastNames.map(([lastName, dateArray]) => new Name(firstName, lastName, dateArray))];
            }
            /**
             * Get the display name of the character on a specific date.
             * @param {number[]} dateArray - The date as [year, month, day].
             * @param {number} displayOption - The display option (FullName or FirstName).
             * @returns {string} The display name.
             */
            getDisplayNameOn(dateArray, displayOption) {
                const date = ArrayToDate(dateArray);
                const validNames = this.names.filter(name => name.startDate <= date);
                if (validNames.length === 0) return "";
                const latestName = validNames[validNames.length - 1];
                switch (displayOption) {
                    case NameDisplayOption.FullName:
                        return `${latestName.firstName} ${latestName.lastName}`;
                    case NameDisplayOption.FirstName:
                        return latestName.firstName;
                    default:
                        return `${latestName.firstName} ${latestName.lastName}`;
                }
            }
        };
        var Characters = {
            1: new Character([1994, 5, 10], "Yu", "Narukami"),
            2: new Character([1993, 4, 15], "Kotone", "Shiomi",[["Narukami", [2015, 2, 15]]]),
            3: new Character([2000, 2, 2], "Ren", "Amamiya",[["Dojima", [2026, 11, 1]]]),
            4: new Character([2004, 10, 4], "Nanako", "Dojima")
        };
        var nameController = comp(ref_comp).layer("Name Controller");
        var year = nameController.effect("Year")("Slider");
        var month = nameController.effect("Month")("Slider");
        var day = nameController.effect("Day")("Slider");
        var characterIndex = nameController.effect("Character")("Menu");
        var character = Characters[characterIndex];
        return character.getDisplayNameOn([year, month, day], displayOption);
    }
}