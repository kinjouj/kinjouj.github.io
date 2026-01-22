$(function () {
  const $btn = $("<button>", {
    id: "btn-back-to-top",
    type: "button",
    class: "btn btn-info btn-floating btn-lg",
    html: '<i class="fas fa-arrow-up"></i>',
    css: {
      position: "fixed",
      bottom: "20px",
      right: "30px"
    }
  });

  $("body").append($btn);

  $btn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });
});
