const openButton1 = document.getElementById("openButton1");
const openButton2 = document.getElementById("openButton2");
const openButton3 = document.getElementById("openButton3");
const openButton4 = document.getElementById("openButton4");
const dialogBox = document.getElementById("dialogBox");
const closeButton = document.getElementById("closeButton");
const dialogBoxText = document.getElementById("textHere");


openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `NP Membership
                Cost: $0/month
                Benefits:
                Access to basic online resources and articles.
                Participation in community forums or discussion groups.
                Monthly newsletter with updates and tips.
                Ideal for: Individuals new to the platform who want to explore its offerings without commitment.`
});
openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Bronze Membership
                        Cost: $20/month
                        Benefits:
                        All Free benefits, plus:
                        Access to exclusive online courses or tutorials.
                        10% discount on premium content or features.
                        Ability to save and bookmark favorite articles or resources.
                        Participation in online Q&A sessions with experts.
                        Ideal for: Members looking to enhance their knowledge and experience with additional online
                        tools.`
});
openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Silver Membership
                        Cost: $40/month
                        Benefits:
                        All Bronze benefits, plus:
                        Access to members-only webinars and training sessions.
                        20% discount on all premium features and services.
                        Priority access to new online resources or tools before public release.
                        Enhanced profile features, including custom avatars and bios.
                        Access to a members-only online community with networking opportunities.
                        Ideal for: More engaged users wanting deeper interaction and content.`
});
openButton4.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Gold Membership
                        Cost: $70/month
                        Benefits:
                        All Silver benefits, plus:
                        Unlimited access to all premium courses and resources.
                        30% discount on future upgrades or exclusive content.
                        Featured member spotlight on the homepage.
                        Dedicated account manager for personalized assistance and support.
                        Access to a private online mastermind group for advanced learning and networking.
                        Ideal for: Serious users looking to maximize their engagement and benefit from comprehensive
                        resources and support.`
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});


/* function setTiemstamp() {
    // Get the current date and time
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();  // Format as ISO string (e.g., "2023-10-22T14:30:00.000Z")

    // Set the value of the hidden input
    document.getElementById("timestamp").value = formattedDate;
} */


