export let calculateTotalNutritions = (ingredients) => {

    console.log(ingredients)

    let totalNutrition = {
        "Protein": 0.00,
        "Kolhydrater": 0.00,
        "Fett": 0.00,
        "Energi (kcal)": 0.00,
        "Salt": 0.00,
        "Socker totalt": 0.00,
        "Summa mättade fettsyror": 0.00,
        "Summa enkelomättade fettsyror": 0.00,
        "Summa fleromättade fettsyror": 0.00
    }


    ingredients.forEach((ingredient) => {
        let units = ingredient.units;
        let gramUnit = ingredient.unitEquivalentInGrams;

        for (let nutrition in ingredient.per100g) {
            if (nutrition in totalNutrition) {
                let value = ingredient.per100g[nutrition];
                let fixedValue = value.replace(",", ".");
                let parsedNutrition = parseFloat(fixedValue)

                let calculatedValue = (parsedNutrition * gramUnit * units) / 100;

                let finalValueFixedDecimals = Math.round(calculatedValue * 100) / 100
                console.log('finalValue',nutrition + " " +finalValueFixedDecimals)

                totalNutrition[nutrition] += finalValueFixedDecimals;
            }
        }
    })

    console.log(totalNutrition)

    return totalNutrition
}