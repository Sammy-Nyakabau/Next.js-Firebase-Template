import {
  useCollection,
  useDocument,
  useCollectionDataOnce,
  useDocumentData,
  useDocumentOnce,
} from "react-firebase-hooks/firestore";
import { storeDB } from "../index";

const FirestoreCollection = () => {
  const [value, loading, error] = useCollection(
    storeDB().collection("hooks"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{" "}
            {value.docs.map((doc) => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data())},{" "}
              </React.Fragment>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};

// const [snapshot, loading, error] = useCollectionOnce(query, options);

// const [values, loading, error] = useCollectionData<T>(query, options);

const FirestoreDocument = () => {
  const [value, loading, error] = useDocument(
    storeDB.doc("hooks/nBShXiRGFAhuiPfBaGpt"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && <span>Document: {JSON.stringify(value.data())}</span>}
      </p>
    </div>
  );
};

// const [value, loading, error] = useDocumentData<T>(reference, options);


// const [value, loading, error] = useDocumentDataOnce<T>(reference, options);
