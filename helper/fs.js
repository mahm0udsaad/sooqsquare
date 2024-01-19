// Helper function to read file content as ArrayBuffer
export async function readFileAsArrayBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = function () {
        resolve(reader.result);
      };
  
      reader.onerror = function (error) {
        reject(error);
      };
  
      reader.readAsArrayBuffer(file);
    });
  }
  