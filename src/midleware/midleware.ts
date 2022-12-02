const catchAsync = require('../utils/catchAsync');

exports.auth = catchAsync(async (req : any, res : any, next : any) => {
    const token = req.headers?.authorization?.split(' ')[1]

    if (token) {
      const base64String = token.split(".")[1];
    const decodedValue = JSON.parse(Buffer.from(base64String,    
                         "base64").toString("ascii"));
            res.locals.user = decodedValue;
            next();
          
        
      } else {
        res.locals.user = null;
      }

  }); 
