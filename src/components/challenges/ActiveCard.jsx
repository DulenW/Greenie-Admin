import PropTypes from 'prop-types';

function ActiveCard({ challenge }) {
  return (
    <div className="bg-bgLightGray rounded-lg p-5 w-full flex flex-col md:flex-row items-start md:items-center relative">
      {/* Options Button */}
      <button className="text-textGray hover:text-gray-700 absolute top-2 right-2">&#x22EE;</button>

      {/* Image Section */}
      <div
        className="h-24 w-full md:w-40 bg-gray-300 rounded-md bg-cover bg-center flex-shrink-0"
        style={{
          backgroundImage: `url(${challenge.photoUrl || 'https://via.placeholder.com/240'})`,
        }}
      ></div>

      {/* Text Section */}
      <div className="mt-4 md:mt-0 md:ml-4 flex-grow">
        <h3 className="text-lg text-textGray font-semibold">{challenge.name}</h3>
        <p className="text-sm text-textGray mt-1">Added by: {challenge.addedBy}</p>
        <p className="text-sm text-textGray mt-1">Points: {challenge.points}</p>
        <p className="text-sm text-textGray mt-1">Submissions: {challenge.submissions}</p>
      </div>
    </div>
  );
}

// Add PropTypes validation for the props
ActiveCard.propTypes = {
  challenge: PropTypes.shape({
    photoUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    addedBy: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    submissions: PropTypes.number.isRequired,
  }).isRequired,
};

export default ActiveCard;
