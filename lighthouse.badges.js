const { makeBadge, ValidationError } = require('badge-maker');
const fs = require('fs');

const { categories } = JSON.parse(
  fs.readFileSync('./lighthouse.report.json', 'utf8')
);

const scores = {
  performance: { score: categories.seo.score * 100, label: 'Performance' },
  accessibility: {
    score: categories.accessibility.score * 100,
    label: 'Accessibility',
  },
  bestPractices: {
    score: categories['best-practices'].score * 100,
    label: 'Best Practices',
  },
  seo: { score: categories.seo.score * 100, label: 'SEO' },
};

function getColor(score) {
  if (score >= 90) return 'brightgreen';
  if (score >= 50) return 'orange';
  return 'red';
}

for (const key of Object.keys(scores)) {
  const {label, score} = scores[key];
  const badge = makeBadge({
    label,
    message: '' + score,
    color: getColor(score),
  });
  fs.writeFileSync(`./.badges/${key}.svg`, badge);
}
