if( typeof module !== 'undefined' )
require( '../staging/atop/variator/ParameterVariator.s' );

var _ = wTools;

var Downloader =   require( '../staging/atop/test/Downloader.s' );

var downloader = Downloader
({
  videoVaryFirst : null,
  resolutionPreffered : [ null ],
  resolutionAllowed : [ '360p', '540p' ]
});

var o =
{
  allowedName : 'resolutionAllowed',
  prefferedName : 'resolutionPreffered',
  target : downloader,
  onAttempt : downloader.onAttempt
}

if( downloader.videoVaryFirst === 'format' )
{
  o.allowedName = 'resolutionAllowed';
  o.prefferedName = 'resolutionPreffered';
  o.dependsOf =
  {
    allowedName : 'formatAllowed',
    prefferedName : 'formatPreffered'
  }
}
if( downloader.videoVaryFirst === 'resolution' )
{
  o.allowedName = 'formatAllowed';
  o.prefferedName = 'formatPreffered';
  o.dependsOf =
  {
    allowedName : 'resolutionAllowed',
    prefferedName : 'resolutionPreffered'
  }
}

var variator = _.ParameterVariator( o );
debugger;
variator.make()
.thenDo( function( err, got )
{
  if( err )
  throw _.err( err );

  console.log( got );

  console.log( variator.target.selectedVariants );
})