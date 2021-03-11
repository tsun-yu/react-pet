export const switchColor = (x) => {
  x.style.color === "rgb(203, 153, 126)"
    ? (x.style.color = "#fff1e6")
    : (x.style.color = "#cb997e");
  x.style.border === "0.125rem solid rgb(203, 153, 126)"
    ? (x.style.border = "#fff1e6 solid 0.125rem")
    : (x.style.border = "#cb997e solid 0.125rem");
};
