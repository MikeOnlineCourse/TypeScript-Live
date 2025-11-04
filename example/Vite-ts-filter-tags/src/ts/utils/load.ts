const loadingRef = document.querySelector(".loading") as HTMLElement;
const contentRef = document.querySelector(".content") as HTMLElement;

const loading = {
  show: (): void => {
    contentRef.innerHTML = "";
    loadingRef.classList.remove("hidden");
  },
  hidden: (): void => {
    loadingRef.classList.add("hidden");
  },
};

export default loading;
