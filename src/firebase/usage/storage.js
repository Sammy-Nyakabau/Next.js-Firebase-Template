import { useDownloadURL } from 'react-firebase-hooks/storage';
import storage from '../firebase'

const DownloadURL = () => {
  const [value, loading, error] = useDownloadURL(
    storage.ref('path/to/file')
  );

  return (
    <div>
      <p>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Download URL: Loading...</span>}
        {!loading && value && (
          <React.Fragment>
            <span>Download URL: {value}</span>
          </React.Fragment>
        )}
      </p>
    </div>
  );
};