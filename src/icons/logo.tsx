import clsx from 'clsx';

export default function Logo(props: React.ComponentProps<'h1'>) {
   return (
      <h1 {...props} className={clsx('font-cinderela text-3xl text-white', props.className)}>
         Kortuna
      </h1>
   );
}
