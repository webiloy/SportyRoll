export function options() {
  const token = document.cookie;
  return {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}
