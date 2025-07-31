/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */
const generateFreelancer = () => {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(Math.random() * PRICE_RANGE.max) + PRICE_RANGE.min;

  return {
    name,
    occupation,
    rate,
  };
};

const getAvgRate = () => {
  return (
    FREELANCERS.reduce(
      (totalRate, freelancer) => totalRate + freelancer.rate,
      0
    ) / NUM_FREELANCERS
  );
};

const Freelancer = (freelancerInfo) => {
  const rowHTML = `
    <tr>
      <td class="name-col">${freelancerInfo.name}</td>
      <td class="occupation-col">${freelancerInfo.occupation}</td>
      <td class="rate-col">$${freelancerInfo.rate}</td>
    </tr>
  `;

  return rowHTML;
};

const AverageRate = () => {
  return `<p>The average rate is $${AVERAGE_RATE}.</p>`;
};

const FreelancerTable = () => {
  const tableHTML = `
    <table>
      <tr class="heading-row">
        <th class="heading-col">NAME</th>
        <th class="heading-col">OCCUPATION</th>
        <th class="heading-col">RATE</th>
        ${FREELANCERS.map((freelancer) => Freelancer(freelancer)).join('')}
      </tr>
    </table>
  `;

  return tableHTML;
};

const render = () => {
  const tempName = `
    <h1>Freelancer Forum</h1>
    ${AverageRate()}
    ${FreelancerTable()}
  `;

  document.querySelector('#app').innerHTML = tempName;
};

// === Constants ===
const NAMES = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'];
const OCCUPATIONS = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Engineer'];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;
const FREELANCERS = Array.from({ length: NUM_FREELANCERS }, (_) =>
  generateFreelancer()
);
const AVERAGE_RATE = getAvgRate();

render();
