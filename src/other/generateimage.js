import html2canvas from "html2canvas";

export async function handledownload() {
  const element = document.getElementById("newprint1"),
    canvas = await html2canvas(element),
    data = canvas.toDataURL("image/jpg"),
    link = document.createElement("a");

  link.href = data;
  link.download = "Table.jpg";
  const img = document.createElement("img");
  img.src = data;
  img.alt = "Data URI Image";

  const element1 = document.getElementById("newprint2"),
    canvas1 = await html2canvas(element1),
    data1 = canvas1.toDataURL("image/jpg"),
    link1 = document.createElement("a");

  link1.href = data1;
  link1.download = "Graph.jpg";
  const img1 = document.createElement("img");
  img1.src = data1;
  img1.alt = "Data URI Image";

  return [img.src, img1.src];
}
