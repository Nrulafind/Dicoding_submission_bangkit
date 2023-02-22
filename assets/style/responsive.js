function scrollToTop() {
    document.querySelector('#top').scrollIntoView({
        behavior: 'smooth'
    });
};
function scrollToElement1() {
    document.querySelector('#algorithm').scrollIntoView({
        behavior: 'smooth'
    });
};
function scrollToElement2() {
    document.querySelector('#rumus').scrollIntoView({
        behavior: 'smooth'
    });
};
function scrollToElement3() {
    document.querySelector('#profile').scrollIntoView({
        behavior: 'smooth'
    });
};
document.querySelector(".refferences").addEventListener("click", function () {
    Swal.fire({
        title: "display button refferensi",
        showCancelButton: true,
        confirmButtonText: "Confirm",
        confirmButtonColor: "#00ff99",
        cancelButtonColor: "#ff0099"
    });
});
