import { useList, useListKeys, useListVals, useObject, useObjectVal } from 'react-firebase-hooks/database';
import { DB } from '../firebase'

const DatabaseList = () => {
  const [snapshots, loading, error] = useList(DB.ref('list'));

  return (
    <div>
      <p>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>List: Loading...</span>}
        {!loading && snapshots && (
          <React.Fragment>
            <span>
              List:{' '}
              {snapshots.map((v) => (
                <React.Fragment key={v.key}>{v.val()}, </React.Fragment>
              ))}
            </span>
          </React.Fragment>
        )}
      </p>
    </div>
  );
};

// const [keys, loading, error] = useListKeys(reference);

// const [values, loading, error] = useListVals<T>(reference, options);


const DatabaseValue = () => {
  const [value, loading, error] = useObject(firebase.database().ref('value'));

  return (
    <div>
      <p>
        {error && <strong>Error: {error}</strong>}
        {loading && <span>Value: Loading...</span>}
        {value && <span>Value: {value.val()}</span>}
      </p>
    </div>
  );
};

// const [value, loading, error] = useObjectVal<T>(reference, options);