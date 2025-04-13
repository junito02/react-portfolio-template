import React, { useEffect, useState } from "react";
import Article from "/src/components/wrappers/Article.jsx";
import { useParser } from "/src/helpers/parser.js";
import { Col } from "react-bootstrap";
import { useLanguage } from "/src/providers/LanguageProvider.jsx";
import StatusMessage from "/src/components/generic/StatusMessage.jsx";
import { useTheme } from "/src/providers/ThemeProvider.jsx";
import { useFeedbacks } from "/src/providers/FeedbacksProvider.jsx";

function ArticleContactForm({ data }) {
  const parser = useParser();
  const { getString } = useLanguage();
  const { getSelectedTheme } = useTheme();
  const { displayNotification } = useFeedbacks();

  const parsedData = parser.parseArticleData(data);

  const [didSubmitMessage, setDidSubmitMessage] = useState(false);

  useEffect(() => {
    setDidSubmitMessage(false); // Reset the message submission state on theme change
  }, [getSelectedTheme()]);

  return (
    <Article className={`article-contact-form pb-2`} title={parsedData.title}>
      {/* Reemplazamos el formulario con enlaces de contacto */}
      <div className="contact-links">
        <div className="contact-link">
          <a href="mailto:junioralejandrotibucio@gmail.com">
            <i className="fa-solid fa-envelope"></i> E-mail
          </a>
        </div>
        <div className="contact-link">
          <a href="https://www.linkedin.com/in/junior-alejandro-836684344/">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <div className="contact-link">
          <a href="https://github.com/junito02">
            <i className="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </div>

      {didSubmitMessage && (
        <StatusMessage
          title={getString("yay")}
          faIcon={`fa-solid fa-check`}
          type={`success`}
          message={getString("message_sent_success")}
        />
      )}
    </Article>
  );
}

export default ArticleContactForm;
