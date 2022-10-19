<?php

namespace Colymba\BulkManager\BulkAction;

use Colymba\BulkManager\BulkAction\Handler;
use SilverStripe\Core\Convert;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;

/**
 * Bulk action handler for recursive archiving records.
 *
 * @author colymba
 */
class ArchiveHandler extends Handler
{
    /**
     * URL segment used to call this handler
     * If none given, @BulkManager will fallback to the Unqualified class name
     * 
     * @var string
     */
    private static $url_segment = 'archive';

    /**
     * RequestHandler allowed actions.
     *
     * @var array
     */
    private static $allowed_actions = array('archive');

    /**
     * RequestHandler url => action map.
     *
     * @var array
     */
    private static $url_handlers = array(
        '' => 'archive',
    );

    /**
     * Front-end label for this handler's action
     * 
     * @var string
     */
    protected $label = 'Archive';

    /**
     * Front-end icon path for this handler's action.
     * 
     * @var string
     */
    protected $icon = '';

    /**
     * Extra classes to add to the bulk action button for this handler
     * Can also be used to set the button font-icon e.g. font-icon-trash
     * 
     * @var string
     */
    protected $buttonClasses = 'font-icon-trash';
    
    /**
     * Whether this handler should be called via an XHR from the front-end
     * 
     * @var boolean
     */
    protected $xhr = true;
    
    /**
     * Set to true is this handler will destroy any data.
     * A warning and confirmation will be shown on the front-end.
     * 
     * @var boolean
     */
    protected $destructive = true;

    /**
     * Return i18n localized front-end label
     *
     * @return array
     */
    public function getI18nLabel()
    {
        return _t('GRIDFIELD_BULK_MANAGER.ARCHIVE_SELECT_LABEL', $this->getLabel());
    }

    /**
     * Archive the selected records passed from the archive bulk action.
     *
     * @param HTTPRequest $request
     *
     * @return HTTPResponse List of affected records ID
     */
    public function archive(HTTPRequest $request)
    {
        $records = $this->getRecords();
        
        $successes = array();
        $errors = array();

        foreach ($records as $record)
        {
            $done = $record->doArchive();
            if ($done)
            {
                array_push($successes, $record->ID);
            }else{
                array_push($errors, array('id' => $record->ID, 'message' => $done));
            }
        }

        $response = new HTTPResponse(Convert::raw2json(array(
            'done' => $successes,
            'errors' => $errors,
        )));
        $response->addHeader('Content-Type', 'text/json');

        return $response;
    }
}
