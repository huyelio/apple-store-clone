import { createCardsshelf } from "./card.js";

const products = [
  {
    title: "MacBook Pro",
    subtitle: "Nay với M5, M5 Pro và M5 Max.",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-1.jpg",
    theme: "dark",
  },
  {
    title: "iPad Pro",
    subtitle: "Nay với M5, M5 Pro và M5 Max.",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-2.jpg",
    theme: "light",
  },
  {
    title: "MacBook Neo",
    subtitle: "Điều tuyệt diệu của Mac ở mức giá bất ngờ.",
    description: "Từ 13.999.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-3.jpg",
    theme: "light",
  },
  {
    title: "iPad Air",
    subtitle: "Nay siêu mạnh mẽ với M4.",
    description: "Từ 15.289.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-4.jpg",
    theme: "light",
  },
  {
    tag: "New",
    title: "Studio Display",
    subtitle: "Tuyệt diệu từ cái nhìn đầu tiên.",
    description: "Từ 42.199.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-5.jpg",
    theme: "dark",
  },
  {
    tag: "New",
    title: "Studio Display XDR",
    subtitle: "Thánh chuốt pixel.",
    description: "Từ 87.299.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-6.jpg",
    theme: "dark",
  },
  {
    title: "iPad Pro",
    subtitle: "Mmmmmạnh mẽ.",
    description: "Từ 27.199.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-7.jpg",
    theme: "light",
  },
  {
    title: "iPad",
    subtitle: "Thấy là yêu. Vẽ là phiêu. Tuyệt diệu.",
    description: "Từ 9.257.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-8.jpg",
    theme: "light",
  },
  {
    title: "Mac studio",
    subtitle: "Thêm sức mạnh cho bạn",
    description: "Từ 54.351.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-9.jpg",
    theme: "light",
  },
  {
    title: "iMac",
    subtitle: "Sáng lllláng.",
    description: "Từ 42.199.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-10.jpg",
    theme: "light",
  },
  {
    title: "Mac mini",
    subtitle: "Xuống cỡ. Lên trình.",
    description: "Từ 33.600.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-11.jpg",
    theme: "light",
  },
  {
    title: "iPad mini",
    subtitle: "Điều tuyệt vời nằm gọn trong tay.",
    description: "Từ 12.199.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-12.jpg",
    theme: "light",
  },
  {
    title: "Studio Display",
    // subtitle: "",
    // description: "",
    image: "/assets/images/card-1-13.jpg",
    theme: "light",
  },
];

const promotions = [
  {
    title: "Từ Swift Playgrounds đến Những Khả Năng Vô Hạn",
    description: "Từ 42.349.000đ với chính sách trợ giá cho giáo dục",
    image: "/assets/images/card-1-1.jpg",
    theme: "dark",
  },
];

const cardsshelf = document.querySelector(".cardsshelf-scroller-list");
if (cardsshelf) {
  cardsshelf.innerHTML = products.map(createCardsshelf).join("");
}

const promotionList = document.querySelector("#promotion-list");
if (promotionList) {
  promotionList.innerHTML = promotions.map(createCardsshelf).join("");
}

function setupCardsshelfPaddleNav(listEl) {
  if (!listEl) return;
  const itemSelector = ".cardsshelf-scroller-item";
  const getItems = () => Array.from(listEl.querySelectorAll(itemSelector));

  const items = getItems();
  if (items.length <= 1) return;

  const existingWrapper = listEl.closest(".cardsshelf-paddlenav");
  const wrapper = existingWrapper ?? document.createElement("div");
  if (!existingWrapper) {
    wrapper.className = "cardsshelf-paddlenav";
    listEl.parentNode.insertBefore(wrapper, listEl);
    wrapper.appendChild(listEl);
  }

  const makeBtn = (dir) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `cardsshelf-paddlenav-arrow ${dir}`;
    btn.setAttribute("aria-label", dir === "next" ? "Next" : "Previous");
    btn.innerHTML =
      dir === "next"
        ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
<path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
</svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
<path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"></path>
</svg>`;
    return btn;
  };

  const prevBtn =
    wrapper.querySelector(".cardsshelf-paddlenav-arrow.prev") ?? makeBtn("prev");
  const nextBtn =
    wrapper.querySelector(".cardsshelf-paddlenav-arrow.next") ?? makeBtn("next");

  if (!prevBtn.isConnected) wrapper.appendChild(prevBtn);
  if (!nextBtn.isConnected) wrapper.appendChild(nextBtn);

  const getCenteredIndex = () => {
    const listRect = listEl.getBoundingClientRect();
    const centerX = listRect.left + listRect.width / 2;

    let bestIdx = 0;
    let bestDist = Infinity;

    getItems().forEach((el, idx) => {
      const r = el.getBoundingClientRect();
      const elCenter = r.left + r.width / 2;
      const dist = Math.abs(centerX - elCenter);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    return bestIdx;
  };

  const scrollItemToCenter = (targetEl) => {
    const listRect = listEl.getBoundingClientRect();
    const elRect = targetEl.getBoundingClientRect();
    const delta =
      elRect.left +
      elRect.width / 2 -
      (listRect.left + listRect.width / 2);

    listEl.scrollTo({
      left: listEl.scrollLeft + delta,
      behavior: "smooth",
    });
  };

  const updateDisabled = () => {
    const idx = getCenteredIndex();
    const len = getItems().length;
    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx >= len - 1;
  };

  const goPrev = () => {
    const idx = getCenteredIndex();
    const targetIdx = Math.max(idx - 1, 0);
    scrollItemToCenter(getItems()[targetIdx]);
  };

  const goNext = () => {
    const idx = getCenteredIndex();
    const targetIdx = Math.min(idx + 1, getItems().length - 1);
    scrollItemToCenter(getItems()[targetIdx]);
  };

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);

  listEl.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateDisabled);
  });

  window.addEventListener("resize", updateDisabled);
  updateDisabled();
}

document
  .querySelectorAll(".cardsshelf-scroller-list")
  .forEach(setupCardsshelfPaddleNav);
