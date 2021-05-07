import { stories } from "./db";

const Stories = function render() {
  return `<div class="container">
  <h2>Featured Stories</h2>
  <p class="heading-paragraph">Together, we've helped save over 80K pets through adoption. Read
      amazing stories to see how adoption change the life of those people</p>
  <div class="widgets">
    ${stories.map((story) => {
      return `<div class="widget">
        <div class="widget__image">
            <img src="${story.image}" alt="graphic-image">
        </div>
        <div class="widget__desc">
            <h3>${story.title}</h3>
            <a href="#" class="link">Read More</a>
        </div>
    </div>`;
    })}
  </div>
</div>`;
};
export default Stories;
