import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { IssueContentContainer } from './styles';

interface IssueContentProps {
  content: string;
}

export const IssueContent = ({ content }: IssueContentProps) => {
  return (
    <IssueContentContainer>
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');

            return !inline && match ? (
              <SyntaxHighlighter
                style={dracula as any}
                PreTag='div'
                language={match[1]}
                children={String(children).replace(/\n$/, '')}
                {...props}
              />
            ) : (
              <code className={className ? className : ''} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </IssueContentContainer>
  );
};
