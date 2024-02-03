import './index.css';

export default function Footer()
{ 
  const date = new Date();

    return (
        <footer >
            
                yogapriya &copy; {date.getFullYear()}
            
        </footer>
    )
}