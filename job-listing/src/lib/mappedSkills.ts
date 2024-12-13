export function mappedSkills(
  lang: string[],
  tools: string[],
  level: string,
  role: string
) {
  const combinedSkills = [role, level, ...lang, ...tools];
  return combinedSkills.map((skill) => ({
    label: skill,
  }));
}
