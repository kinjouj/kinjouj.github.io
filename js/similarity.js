function fetchSimilarity(id) {
  fetch(`/similarity/${id}.json`).then(res => {
    if (!res.ok) {
      return;
    }

    res.json().then(data => {
      const similarity = data.similarity;

      if (similarity.length <= 0) {
        return;
      }

      const $container = $(".post-similarity");
      const $fieldset = $("<fieldset>").addClass("p-2");
      const $legend = $("<legend>").text("関連記事");
      $fieldset.append($legend);

      const $list = $("<ul>").addClass("list-unstyled");
      similarity.forEach(post => {
        $("<li>").addClass("my-2").append(
          $("<a>", {
            href: post.permalink,
            text: post.title,
            class: "p-3 related-link"
          })
        ).appendTo($list);
      });

      $fieldset.append($list);
      $container.append($fieldset);
    });
  });
}
