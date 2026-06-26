export default function timeline() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const timelineTitle = document.getElementById("timelineTitle");
    const timelineText = document.getElementById("timelineText");

    if (!timelineItems.length || !timelineTitle || !timelineText) {
        return;
    }

    timelineItems.forEach((item) => {
        item.addEventListener("click", () => {
            timelineItems.forEach((timelineItem) => {
                timelineItem.classList.remove("active");
            });

            item.classList.add("active");

            const title = item.dataset.title;
            const text = item.dataset.text;

            timelineTitle.textContent = title;
            timelineText.textContent = text;
        });
    });
}