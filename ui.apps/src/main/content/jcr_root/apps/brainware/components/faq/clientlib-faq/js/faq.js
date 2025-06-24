document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;

    const headers = document.querySelectorAll(".accordion-header");
    function toggleAccordion(content, open) {
        const header = content?.previousElementSibling;
        const icon = header?.querySelector(".accordion-icon");
        content?.classList.toggle("open", open);
        header?.classList.toggle("active", open);
        content.style.maxHeight = open ? `${content.scrollHeight}px` : null;
        if (icon) icon.textContent = open ? "×" : "+";
    }

    function closeAllAccordions(exclude = null) {
        document.querySelectorAll(".accordion-content.open").forEach(openContent => {
            if (openContent !== exclude) toggleAccordion(openContent, false);
        });
    }
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isOpen = content.classList.contains("open");

            closeAllAccordions(content);
            toggleAccordion(content, !isOpen);
        });
    });
});
