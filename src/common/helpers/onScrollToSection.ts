const onScrollToSection = (sectionId: string) => {
  const yOffset = -75;
  const element = document.getElementById(sectionId);
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export default onScrollToSection;
