if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary(cs, {
    "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO": "Uploading %s file(s). %s done. %s error(s).",
    "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT": "Musíte vybrat alespoň jednu položku.",
    "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "Data budou nenávratně ztracena. Opravdu chcete pokračovat?"
});
}