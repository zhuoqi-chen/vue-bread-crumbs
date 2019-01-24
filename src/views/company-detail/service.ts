const companyMap: string[] = ["google", "apple", "aws"];
export function getCompanyNameById(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(companyMap[id] || "other");
    }, 500);
  });
}
