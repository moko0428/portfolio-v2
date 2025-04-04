/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import styles from './MarkdownViewer.module.css';
import Link from 'next/link';
import { isGif } from '@/src/utils/image';
import Markdown from 'react-markdown';

type Props = {
  content: string;
};

export default function MarkdownViewer({ content }: Props) {
  return (
    <div className={styles['no-global-styles']}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (href) =>
            href.href && (
              <Link href={href.href} target="_blank">
                {href.children}
              </Link>
            ),
          code(props) {
            /* eslint-disable no-console */
            const { ref, children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || '');

            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                language={match[1]}
                style={oneDark}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },

          img: (image) => (
            <Image
              src={image.src || ''}
              alt={image.src || ''}
              width={0}
              height={0}
              sizes="100%"
              style={{
                objectFit: 'contain',
                maxHeight: '600px',
                width: '100%',
                height: 'auto',
              }}
              unoptimized={isGif(image.src)}
            />
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
