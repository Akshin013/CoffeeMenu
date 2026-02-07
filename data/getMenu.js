export async function getMenu() {
  const res = await fetch(
    "https://opensheet.elk.sh/1xBiOSeocmuJTWmD8jHiBG2l7ZW2SYEaZbwddEdomyfY/Ответы%20на%20форму%20(1)",
    { cache: "no-store" }
  );

  return res.json();
}
// 1xBiOSeocmuJTWmD8jHiBG2l7ZW2SYEaZbwddEdomyfY

// https://docs.google.com/spreadsheets/d/1xBiOSeocmuJTWmD8jHiBG2l7ZW2SYEaZbwddEdomyfY/edit?usp=sharing


