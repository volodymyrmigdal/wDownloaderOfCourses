
if( typeof module !== 'undefined' )
require( '../staging/atop/coursesDownloader/CoursesDownloader.s' );

var _ = wTools;
var cd = _.CoursesDownloader.Loader( 'Coursera' );
cd.download();