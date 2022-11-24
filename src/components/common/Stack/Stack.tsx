import classes from './Stack.module.css';

export default function Stack({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.stack}>
      {children}
    </div>
  )
}