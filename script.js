// Calorie Calculation
document.getElementById("calorieForm").addEventListener("submit", function(e){
    e.preventDefault();
    
    let age = Number(document.getElementById("age").value);
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let activity = Number(document.getElementById("activity").value);

    // Simple BMR formula (Mifflin-St Jeor for demo)
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    let maintenance = Math.round(bmr * activity);

    document.getElementById("calorieResult").innerHTML = `
        Your maintenance calories: <strong>${maintenance} kcal/day</strong>
    `;
});

// Muscle Exercises Data
const exercises = {
    chest: ["Bench Press", "Push-Ups", "Chest Fly"],
    back: ["Pull-Ups", "Lat Pulldown", "Deadlift"],
    legs: ["Squats", "Lunges", "Leg Press"],
    arms: ["Bicep Curls", "Tricep Dips", "Hammer Curls"],
    shoulders: ["Shoulder Press", "Lateral Raises", "Front Raises"],
    abs: ["Crunches", "Plank", "Leg Raises"]
};

// Muscle Images
const muscleImages = {
    chest: "images/body_chest.png",
    back: "images/body_back.png",
    legs: "images/body_legs.png",
    arms: "images/body_arms.png",
    shoulders: "images/body_shoulders.png",
    abs: "images/body_abs.png"
};

// Muscle Selection
const buttons = document.querySelectorAll(".muscle-buttons button");
const bodyImage = document.getElementById("bodyImage");
const exerciseList = document.getElementById("exerciseList");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const muscle = btn.dataset.muscle;
        bodyImage.src = muscleImages[muscle];

        let html = `<h3>${muscle.charAt(0).toUpperCase() + muscle.slice(1)} Exercises:</h3><ul>`;
        exercises[muscle].forEach(ex => html += `<li>${ex}</li>`);
        html += "</ul>";
        exerciseList.innerHTML = html;
    });
});
