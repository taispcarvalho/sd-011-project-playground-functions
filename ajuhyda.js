

function catAndMouse(mouse, cat1, cat2) {
if (Math.abs(cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  }

if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
  let mouse=1
  let cat1=0
  let cat2=2
  console.log(catAndMouse(1,0,2))