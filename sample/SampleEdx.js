
if( typeof module !== 'undefined' )
require( '../staging/atop/coursesDownloader/CoursesDownloader.s' );

var _ = wTools;
var cd = _.CoursesDownloader.Loader( 'Edx' );

var con = new wConsequence().give();

con.seal( cd )
.ifNoErrorThen( cd._make )
.ifNoErrorThen( cd._login )
.ifNoErrorThen( cd._coursesList )
.ifNoErrorThen( cd._coursePick,[ 0 ] )
.ifNoErrorThen( cd._resourcesList )
;

con.thenDo( function( err,got )
{
  if( err )
  throw _.errLogOnce( err );
});