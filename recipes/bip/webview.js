const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Ferdi => {
  const getMessages = () => {
    const elements = document.querySelectorAll('.contact-list__message__unread-badge-counter');
    let count = 0;
    for (let i = 0; i < elements.length; i++) {
      count += Ferdi.safeParseInt(elements[i].textContent);
    }
    Ferdi.setBadge(count, 0);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));
};
