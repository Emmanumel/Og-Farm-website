const review = document.getElementById("review");
const counter = document.getElementById("charCount");

review.addEventListener("input", () => {

    counter.textContent = `${review.value.length}/500`;

});


const stars = document.querySelectorAll('.rating input');
const ratingValue = document.getElementById("ratingValue");

const emoji = document.getElementById("feedbackEmoji");
const feedback = document.getElementById("feedbackText");

stars.forEach(star => {

    star.addEventListener("change", function () {

        const value = Number(this.value);

        // Update rating text
        ratingValue.textContent = value;

        // Update emoji and message
        if (value <= 2) {

            emoji.textContent = "😞";
            feedback.textContent =
                "We're sorry your experience wasn't great. Please tell us how we can improve.";

        } 
        else if (value <= 4) {

            emoji.textContent = "🙂";
            feedback.textContent =
                "Thanks for your feedback! We'd love to know how we can earn that extra star.";

        } 
        else {

            emoji.textContent = "😍";
            feedback.textContent =
                "Awesome! Thank you for your amazing review. We're so glad you loved OG Farm! 🌱💚";

        }

    });

});