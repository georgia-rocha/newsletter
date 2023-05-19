import PropTypes from 'prop-types';

const Article = ({ title, text, tags, image, alt }) => {
  return <div className="alura-card">
    <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h3>
    <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
      {
        tags.map((tag, index) => <span key={index} className="alura-tag">{tag}</span>)
      }
    </div>
    <div className="grid gap-1">
      {
        text.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-400 text-justify">{content}</p>)
      }
    </div>
    { image && <img className="sm:p-4" src={image} alt={alt} /> }
    { image && alt && <span className="sr-only">{alt}</span> }
  </div>
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf.isRequired,
  tags: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Article;