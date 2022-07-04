import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div>
      <div>
        <div className="w-full h-48 flex justify-center items-center rounded-lg cursor-pointer border-2 border-dashed border-red-300">
          <label>
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <div>
          <div>
            <span>$</span>
          </div>
          <input id="price" type="text" placeholder="0.00" />
          <div>
            <span>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <textarea rows={4} />
        </div>
      </div>
      <button>Upload product</button>
    </div>
  );
};

export default Upload;
