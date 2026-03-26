export const createReport = async (db: any, report: any) => {
  const query = `
    INSERT INTO reports (title, description, status, created_at)
    VALUES (?, ?, ?, ?)
  `;

  await db.executeSql(query, [
    report.title,
    report.description,
    report.status,
    new Date().toISOString(),
  ]);
};

export const getReports = async (db: any) => {
  const results = await db.executeSql(`SELECT * FROM reports ORDER BY id DESC`);

  const rows = results[0].rows;
  let reports = [];

  for (let i = 0; i < rows.length; i++) {
    reports.push(rows.item(i));
  }

  return reports;
};

export const deleteReport = async (db: any, id: number) => {
  await db.executeSql(`DELETE FROM reports WHERE id = ?`, [id]);
};