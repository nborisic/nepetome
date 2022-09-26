import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import styles from './index.module.scss';

const Markdown = ({ content, ...htmlProps }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ ...props }) => (
          <a
            {...htmlProps}
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
            textTagName="span"
            className={styles.link}
          >
            {props.children}
          </a>
        ),
        // p: ({ ...props }) => (
        //   <Body
        //     {...htmlProps}
        //     lineHeight="long"
        //     size={2}
        //     className={styles.paragraph}
        //   >
        //     {props.children}
        //   </Body>
        // ),
        // h5: ({ ...props }) => (
        //   <Heading size={1} {...htmlProps} className={styles.heading}>
        //     {props.children}
        //   </Heading>
        // ),
        // h4: ({ ...props }) => (
        //   <Heading size={2} {...htmlProps} className={styles.heading}>
        //     {props.children}
        //   </Heading>
        // ),
        // h3: ({ ...props }) => (
        //   <Heading size={3} {...htmlProps} className={styles.heading}>
        //     {props.children}
        //   </Heading>
        // ),
        // h2: ({ ...props }) => (
        //   <Heading size={4} {...htmlProps} className={styles.heading}>
        //     {props.children}
        //   </Heading>
        // ),
        // h1: ({ ...props }) => (
        //   <Heading size={5} {...htmlProps} className={styles.heading}>
        //     {props.children}
        //   </Heading>
        // ),
        // hr: () => (
        //   <Divider
        //     {...htmlProps}
        //     className={classnames(styles.divider, {
        //       [styles.dividerWithSidebar]: hasSidebar,
        //     })}
        //   />
        // ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
