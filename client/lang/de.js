if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
  if(typeof(console) != 'undefined') console.error('Class ss.i18n not defined');
} else {
  ss.i18n.addDictionary(de, {
    "GRIDFIELD_BULK_UPLOAD.PROGRESS_INFO": "Übertrage %s Datei(en). %s erfolgreich übertragen. %s Fehler.",
    "GRIDFIELD_BULK_MANAGER.BULKACTION_EMPTY_SELECT": "Sie müssen mindestens ein Element auswählen.",
    "GRIDFIELD_BULK_MANAGER.CONFIRM_DESTRUCTIVE_ACTION": "Wollen Sie dieses Element wirklich unwiderruflich löschen?"
});
}