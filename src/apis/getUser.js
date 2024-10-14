export async function getUser(showBoundary) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Something Went Wrong");
    const data = await res.json();

    return data;
  } catch (e) {
    return showBoundary(e);
  }
}
