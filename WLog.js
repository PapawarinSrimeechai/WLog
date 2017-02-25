app.factory('WLog', ["$cordovaSQLite", "$ionicPlatform", "$q", "$http", "$timeout","$localStorage", "$cordovaFile", function($cordovaSQLite, $ionicPlatform, $q, $http, $timeout, $localStorage, database, $cordovaFile, $scope) {

        console.log("factory start..");


        function zeroFill(number, width) {
            width -= number.toString().length;
            if (width > 0) {
                return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
            }
            return number + ""; // always return a string
        }

        function getTimeStamp() {
            var now = new Date();
            return (now.getDate() + '/' +
                (now.getMonth() + 1) + '/' +
                now.getFullYear() + " " +
                now.getHours() + ':' +
                ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' +
                ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds())));
        }

        return {


            log_device_status: function(net_status, gps_status, box_status) {

                console.log("log_device_status start");
                timestamp = getTimeStamp();
                document.addEventListener("deviceready", function() {
                    //  var type = window.TEMPORARY;

                    var type = LocalFileSystem.PERSISTENT; //use function must to use permission 
                    var size = 5 * 1024 * 1024;
                    window.requestFileSystem(type, size, successCallback, errorCallback);

                    function successCallback(fs) {


                        fs.root.getFile('log_device_status.txt', { create: true, exclusive: false }, function(fileEntry) {
                            //alert('File creation successfull!');
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    // alert('log_device_status Write completed.');
                                };

                                fileWriter.onerror = function(e) {
                                    //alert('log_device_status Write failed: ' + e.toString());
                                };
                                var blob = new Blob([timestamp + ', net_status : ' + net_status + ', gps_status : ' +
                                    gps_status + ', box_status : ' + box_status + '\n'
                                ], { type: 'text/plain' });
                                fileWriter.seek(fileWriter.length);
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);

                    }



                    function errorCallback(error) {
                        // alert("ERROR: " + error.code);
                        console.log(error);
                    }
                }, false);

            },
            log_getshipment_TOM: function(driver_id, driver_domain, truck_id) {
                console.log("log_getshipment_TOM start");


                timestamp = getTimeStamp();
                document.addEventListener("deviceready", function() {
                    //  var type = window.TEMPORARY;
                    var type = LocalFileSystem.PERSISTENT;
                    var size = 5 * 1024 * 1024;
                    window.requestFileSystem(type, size, successCallback, errorCallback);

                    function successCallback(fs) {

                        //alert("log_getshipment_TOM function");
                        fs.root.getFile('log_getshipment_TOM.txt', { create: true, exclusive: false }, function(fileEntry) {
                            //alert('File creation successfull!');
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    // alert('log_getshipment_TOM Write completed.');
                                };

                                fileWriter.onerror = function(e) {
                                    // alert('log_getshipment_TOM Write failed: ' + e.toString());
                                };
                                var blob = new Blob([timestamp + ', driver_id : ' + driver_id + ', driver_domain : ' + driver_domain + ', truck_id : ' + truck_id + '\n'], { type: 'text/plain' });
                                fileWriter.seek(fileWriter.length);
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);

                    }



                    function errorCallback(error) {
                        // alert("ERROR: " + error.code);
                        console.log(error);
                    }
                }, false);

            },
            log_revshipment_TOM: function(ship_id) {
                console.log("log_revshipment_TOM start");

                timestamp = getTimeStamp();
                document.addEventListener("deviceready", function() {
                    //  var type = window.TEMPORARY;
                    var type = LocalFileSystem.PERSISTENT;
                    var size = 5 * 1024 * 1024;
                    window.requestFileSystem(type, size, successCallback, errorCallback);

                    function successCallback(fs) {

                        //alert("log_revshipment_TOM function");
                        fs.root.getFile('log_revshipment_TOM.txt', { create: true, exclusive: false }, function(fileEntry) {
                            //alert('File creation successfull!');
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    // alert('log_revshipment_TOM Write completed.');
                                };

                                fileWriter.onerror = function(e) {
                                    //  alert('log_revshipment_TOM Write failed: ' + e.toString());
                                };
                                var blob = new Blob([timestamp + ', ship_id : ' + ship_id + '\n'], { type: 'text/plain' });
                                fileWriter.seek(fileWriter.length);
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);

                    }



                    function errorCallback(error) {
                        //  alert("ERROR: " + error.code);
                        console.log(error);
                    }
                }, false);

            },
            log_ship_status: function(ship_id, ship_status, ship_spot_id) {
                console.log("log_ship_status start");


                timestamp = getTimeStamp();
                document.addEventListener("deviceready", function() {
                    //  var type = window.TEMPORARY;
                    var type = LocalFileSystem.PERSISTENT;
                    var size = 5 * 1024 * 1024;
                    window.requestFileSystem(type, size, successCallback, errorCallback);

                    function successCallback(fs) {

                        // alert("log_ship_status function");
                        fs.root.getFile('log_ship_status.txt', { create: true, exclusive: false }, function(fileEntry) {
                            //alert('File creation successfull!');
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    // alert('log_ship_status Write completed.');
                                };

                                fileWriter.onerror = function(e) {
                                    //  alert('log_ship_status Write failed: ' + e.toString());
                                };
                                var blob = new Blob([timestamp + ', ship_id : ' + ship_id +
                                    ', ship_status : ' + ship_status + ', ship_spot_id : ' + ship_spot_id + '\n'
                                ], { type: 'text/plain' });
                                fileWriter.seek(fileWriter.length);
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);

                    }



                    function errorCallback(error) {
                        //   alert("ERROR: " + error.code);
                        console.log(error);
                    }
                }, false);

            },
            log_getspot: function(getspot) {
                console.log("log_getspot start");
                 //console.error(timestamp + ', spot_id : ' + getspot[0].spot_id + '\n');

                timestamp = getTimeStamp();
                document.addEventListener("deviceready", function() {
                    //  var type = window.TEMPORARY;
                    var type = LocalFileSystem.PERSISTENT;
                    var size = 5 * 1024 * 1024;
                    window.requestFileSystem(type, size, successCallback, errorCallback);

                    function successCallback(fs) {

                        //alert("log_getspot function");
                        fs.root.getFile('log_getspot.txt', { create: true, exclusive: false }, function(fileEntry) {
                            //alert('File creation successfull!');
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    //alert('log_getspot Write completed.');
                                };

                                fileWriter.onerror = function(e) {
                                    //  alert('log_getspot Write failed: ' + e.toString());
                                };
                                for(var i=0;i<getspot.length;i++)
                                {
                                     var blob = new Blob([timestamp + ', spot_id : ' + getspot[i].spot_id + '\n'], { type: 'text/plain' });
                                     //console.error(timestamp + ', spot_id : ' + getspot[i].spot_id + '\n');
             
                                }
                                fileWriter.seek(fileWriter.length);
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);

                    }



                    function errorCallback(error) {
                        // alert("ERROR: " + error.code);
                        console.log(error);
                    }
                }, false);

            },
            log_updatespot: function(field_name, ship_id, spot_id, field_value) {
                console.log("log_updatespot start");


                timestamp = getTimeStamp();
                document.addEventListener("deviceready", function() {
                    //  var type = window.TEMPORARY;
                    var type = LocalFileSystem.PERSISTENT;
                    var size = 5 * 1024 * 1024;
                    window.requestFileSystem(type, size, successCallback, errorCallback);

                    function successCallback(fs) {

                        //alert("log_updatespot function");
                        fs.root.getFile('log_updatespot.txt', { create: true, exclusive: false }, function(fileEntry) {
                            //alert('File creation successfull!');
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    // alert('log_updatespot Write completed.');
                                };

                                fileWriter.onerror = function(e) {
                                    //  alert('log_updatespot Write failed: ' + e.toString());
                                };
                                var blob = new Blob([timestamp + ', field_name : ' + field_name + ', ship_id : ' + ship_id + ', spot_id : ' + spot_id + ', field_value : ' + field_value + '\n'], { type: 'text/plain' });
                                fileWriter.seek(fileWriter.length);
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);

                    }



                    function errorCallback(error) {
                        // alert("ERROR: " + error.code);
                        console.log(error);
                    }
                }, false);

            },
            log_tom_status: function(tom_status) {
                console.log("log_tom_status start");


                timestamp = getTimeStamp();
                document.addEventListener("deviceready", function() {
                    //  var type = window.TEMPORARY;
                    var type = LocalFileSystem.PERSISTENT;
                    var size = 5 * 1024 * 1024;
                    window.requestFileSystem(type, size, successCallback, errorCallback);

                    function successCallback(fs) {

                        //alert("log_tom_status function");
                        fs.root.getFile('log_tom_status.txt', { create: true, exclusive: false }, function(fileEntry) {
                            //alert('File creation successfull!');
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    // alert('log_tom_status Write completed.');
                                };

                                fileWriter.onerror = function(e) {
                                    // alert('log_tom_status Write failed: ' + e.toString());
                                };
                                var blob = new Blob([timestamp + ', tom_status : ' + tom_status + '\n'], { type: 'text/plain' });
                                fileWriter.seek(fileWriter.length);
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);

                    }



                    function errorCallback(error) {
                        // alert("ERROR: " + error.code);
                        console.log(error);
                    }
                }, false);

            },
            current_device_data: function(dev_uid, dev_band, lang_id) {
                console.log("current_device_data start");


                timestamp = getTimeStamp();
                document.addEventListener("deviceready", function() {
                    //  var type = window.TEMPORARY;
                    var type = LocalFileSystem.PERSISTENT;
                    var size = 5 * 1024 * 1024;
                    window.requestFileSystem(type, size, successCallback, errorCallback);

                    function successCallback(fs) {

                        //  alert("current_device_data function");
                        fs.root.getFile('current_device_data.txt', { create: true, exclusive: false }, function(fileEntry) {
                            //alert('File creation successfull!');
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    //  alert('current_device_data Write completed.');
                                };

                                fileWriter.onerror = function(e) {
                                    //  alert('current_device_data Write failed: ' + e.toString());
                                };
                                var blob = new Blob([timestamp + ', dev_uid : ' + dev_uid + ', dev_band : ' + dev_band + ', lang_id : ' + lang_id + '\n'], { type: 'text/plain' });
                                fileWriter.seek(fileWriter.length);
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);

                    }



                    function errorCallback(error) {
                        //alert("ERROR: " + error.code);
                        console.log(error);
                    }
                }, false);

            },
            log_login: function(driver_id, truck_id, login_status, tokenlogin) {
                console.log("log_login start");
                console.log(tokenlogin);


                timestamp = getTimeStamp();
                document.addEventListener("deviceready", function() {
                    //  var type = window.TEMPORARY;
                    var type = LocalFileSystem.PERSISTENT;
                    var size = 5 * 1024 * 1024;
                    window.requestFileSystem(type, size, successCallback, errorCallback);

                    function successCallback(fs) {

                        //alert("log_login function");
                        fs.root.getFile('log_login.txt', { create: true, exclusive: false }, function(fileEntry) {
                            //alert('File creation successfull!');
                            fileEntry.createWriter(function(fileWriter) {
                                fileWriter.onwriteend = function(e) {
                                    // alert('log_login Write completed.');
                                };

                                fileWriter.onerror = function(e) {
                                    //  alert('log_login Write failed: ' + e.toString());
                                };
                                var blob = new Blob([timestamp + ', driver_id : ' + driver_id + ', truck_id : ' + truck_id + ', login_status : ' + login_status + ', tokenlogin : ' + tokenlogin + '\n'], { type: 'text/plain' });
                                fileWriter.seek(fileWriter.length);
                                fileWriter.write(blob);
                            }, errorCallback);
                        }, errorCallback);

                    }



                    function errorCallback(error) {
                        //  alert("ERROR: " + error.code);
                        console.log(error);
                    }
                }, false);

            },
            setlog_action: function(ship_id, spot_id, spotc_scenario, lang_page, numship, pre_mile, tokenlogin, lastsend_tom_record, callback) {

                console.log('setlog_action start');
                $ionicPlatform.ready(function() {
                    //var deferred = $q.defer();
                    var setlog_actionStatus = '';


                    var query = "SELECT * FROM log_action";
                    $cordovaSQLite.execute(db, query, []).then(function(result) {
                            if (result.rows.length > 0) {
                                // console.log(result.rows.length + " rows found. setlog_action");
                                for (var i = 0; i <= result.rows.length - 1; i++) {
                                    if (ship_id == null) {
                                        ship_id = result.rows.item(i).ship_id;
                                    }
                                    if (spot_id == null) {
                                        spot_id = result.rows.item(i).spot_id;
                                    }
                                    if (spotc_scenario == null) {
                                        spotc_scenario = result.rows.item(i).spotc_scenario;
                                    }
                                    if (lang_page == null) {
                                        lang_page = result.rows.item(i).lang_page;
                                    }
                                    if (numship == null) {
                                        numship = result.rows.item(i).numship;
                                    }
                                    if (pre_mile == null) {
                                        pre_mile = result.rows.item(i).pre_mile;
                                    }
                                    if (tokenlogin == null) {
                                        tokenlogin = result.rows.item(i).tokenlogin;
                                    }
                                    if (lastsend_tom_record == null) {
                                        lastsend_tom_record = result.rows.item(i).lastsend_tom_record;
                                    }
                                }
                                var query = "UPDATE log_action SET ship_id = ?,spot_id=?,spotc_scenario=?,lang_page=?,numship=?,pre_mile=?,tokenlogin=?,lastsend_tom_record=?";
                                $cordovaSQLite.execute(db, query, [ship_id, spot_id, spotc_scenario, lang_page, numship, pre_mile, tokenlogin, lastsend_tom_record]).then(function(result) {
                                        // alert("ship_id Update OK");

                                        console.log("-----------setlog_action update OK!-------------");
                                        setlog_actionStatus = '1';
                                        callback(setlog_actionStatus);
                                    }),
                                    function(error) {
                                        console.log("-----------setlog_action update fail!------------");
                                        setlog_actionStatus = '0';
                                        callback(setlog_actionStatus);
                                        
                                    }
                            } else {
                                var query = "INSERT INTO log_action (ship_id,spot_id,spotc_scenario,lang_page,numship,pre_mile,tokenlogin,lastsend_tom_record) values(?,?,?,?,?,?,?,?)";
                                $cordovaSQLite.execute(db, query, [ship_id, spot_id, spotc_scenario, lang_page, numship, pre_mile, tokenlogin, lastsend_tom_record]).then(function(result) {
                                    console.log("--------------setlog_action Insert OK----------------");
                                    setlog_actionStatus = '1';
                                    callback(setlog_actionStatus);
                                    
                                }, function(error) {
                                    console.log("--------------setlog_action Insert fail!------------");
                                    setlog_actionStatus = '0';
                                    callback(setlog_actionStatus);
                                    
                                });

                            }


                        })

                })
            },
            getlog_action: function(callback) {
                console.log('getlog_action start');
                $ionicPlatform.ready(function() {
                    var textList = [];
                    var query = "SELECT * FROM log_action";
                    $cordovaSQLite.execute(db, query, []).then(function(result) {
                        if (result.rows.length > 0) {
                            console.log(result.rows.length + " rows found.");
                            for (var i = 0; i <= result.rows.length - 1; i++) {
                                textList.push({
                                    ship_id: result.rows.item(i).ship_id,
                                    getspot_id: result.rows.item(i).spot_id,
                                    spotc_scenario: result.rows.item(i).spotc_scenario,
                                    lang_page: result.rows.item(i).lang_page,
                                    numship: result.rows.item(i).numship,
                                    pre_mile: result.rows.item(i).pre_mile,
                                    tokenlogin: result.rows.item(i).tokenlogin,
                                    lastsend_tom_record: result.rows.item(i).lastsend_tom_record
                                });
                                console.log(textList);

                            }

                        callback(textList);
                        } else {
                            console.log("0 rows found. getlog_action");
                        }
                    })


                })
            },
            log_updateaction: function(field_name, value, callback) {
                console.log('log_updateaction start');
                if (value == null) {
                    log_actionStatus = 0;
                    callback(log_updateactionStatus);
                    console.log('value is ' + value);
                } else {
                    $ionicPlatform.ready(function() {
                        var log_actionStatus = '';
                        var query = "SELECT * FROM log_action";
                        $cordovaSQLite.execute(db, query, []).then(function(result) {
                            if (result.rows.length > 0) {
                                //console.log(result.rows.length + " rows found. log_updateaction");
                                for (var i = 0; i <= result.rows.length - 1; i++) {
                                    if (field_name == 'ship_id') {
                                        var query = "UPDATE log_action SET ship_id = ?";
                                        $cordovaSQLite.execute(db, query, [value]).then(function(result) {
                                            console.log("-------Update ship_id OK");
                                            log_updateactionStatus = '1';
                                             callback(log_updateactionStatus);
                                        }, function(error) {
                                            console.log("-------Update ship_id fail!");
                                            log_updateactionStatus = '0';
                                             callback(log_updateactionStatus);
                                        });
                                    } else if (field_name == 'spot_id') {
                                        var query = "UPDATE log_action SET ship_id = ?";
                                        $cordovaSQLite.execute(db, query, [value]).then(function(result) {
                                            console.log("-------Update spot_id OK");
                                            log_updateactionStatus = '1';
                                             callback(log_updateactionStatus);
                                        }, function(error) {
                                            console.log("-------Update spot_id fail!");
                                            log_updateactionStatus = '0';
                                             callback(log_updateactionStatus);
                                        });
                                    } else if (field_name == 'spotc_scenario') {
                                        var query = "UPDATE log_action SET spotc_scenario = ?";
                                        $cordovaSQLite.execute(db, query, [value]).then(function(result) {
                                            console.log("-------Update spotc_scenario OK");
                                            log_updateactionStatus = '1';
                                             callback(log_updateactionStatus);
                                        }, function(error) {
                                            console.log("-------Update spotc_scenario fail!");
                                            log_updateactionStatus = '0';
                                             callback(log_updateactionStatus);
                                        });
                                    } else if (field_name == 'lang_page') {
                                        var query = "UPDATE log_action SET lang_page = ?";
                                        $cordovaSQLite.execute(db, query, [value]).then(function(result) {
                                            console.log("-------Update lang_page OK");
                                            log_updateactionStatus = '1';
                                             callback(log_updateactionStatus);
                                        }, function(error) {
                                            console.log("-------Update lang_page fail!");
                                            log_updateactionStatus = '0';
                                             callback(log_updateactionStatus);
                                        });
                                    } else if (field_name == 'numship') {
                                        var query = "UPDATE log_action SET  numship = ?";
                                        $cordovaSQLite.execute(db, query, [value]).then(function(result) {
                                            console.log("-------Update numship OK");
                                            log_updateactionStatus = '1';
                                             callback(log_updateactionStatus);
                                        }, function(error) {
                                            console.log("-------Update numship fail!");
                                            log_updateactionStatus = '0';
                                             callback(log_updateactionStatus);
                                        });
                                    } else if (field_name == 'pre_mile') {
                                        var query = "UPDATE log_action SET pre_mile = ?";
                                        $cordovaSQLite.execute(db, query, [value]).then(function(result) {
                                            console.log("-------Update pre_mile OK");
                                            log_updateactionStatus = '1';
                                             callback(log_updateactionStatus);
                                        }, function(error) {
                                            console.log("-------Update pre_mile fail!");
                                            log_updateactionStatus = '0';
                                             callback(log_updateactionStatus);
                                        });
                                    } else if (field_name == 'tokenlogin') {
                                        var query = "UPDATE log_action SET tokenlogin = ?";
                                        $cordovaSQLite.execute(db, query, [value]).then(function(result) {
                                            console.log("-------Update tokenlogin OK");
                                            log_updateactionStatus = '1';
                                             callback(log_updateactionStatus);
                                        }, function(error) {
                                            console.log("-------Update tokenlogin fail!");
                                            log_updateactionStatus = '0';
                                             callback(log_updateactionStatus);
                                        });
                                    } else if (field_name == 'lastsend_tom_record') {
                                        var query = "UPDATE log_action SET lastsend_tom_record = ?";
                                        $cordovaSQLite.execute(db, query, [value]).then(function(result) {
                                            console.log("-------Update lastsend_tom_record OK");
                                            log_updateactionStatus = '1';
                                             callback(log_updateactionStatus);
                                        }, function(error) {
                                            console.log("-------Update lastsend_tom_record fail!");
                                            log_updateactionStatus = '0';
                                             callback(log_updateactionStatus);
                                        });
                                    } else {
                                        console.log('-------fail update ... ');
                                        log_updateactionStatus = '0';
                                         callback(log_updateactionStatus);
                                    }


                                }
                            }
                        })
                    })
                }


            },

            // setlog_box_data: function(json, indextom, callback) {
            //     // console.log(json);
            //     len = json.LogData.length;
            //     console.log('setlog_box_data start');
            //     if (indextom == 0) {
            //         indextom = '000000000000000000';
            //     }

            //     function getTime() {
            //         var now = new Date();
            //         return (now.getFullYear().toString() +
            //             (now.getMonth() + 1).toString() +
            //             now.getDate().toString()
            //         );
            //     }
            //     timestamp = getTimeStamp();
            //     time = getTime();
            //     if (time.length > 2) {
            //         settime = time.substring(2, 8);
            //         // console.log(settime);
            //     }
            //     var number = 0;
            //     j = 0;

            //     $ionicPlatform.ready(function() {


            //         var q = "SELECT devc_dev_id FROM tb_device_config";
            //         $cordovaSQLite.execute(db, q, []).then(function(result) {
            //             if (result.rows.length > 0) {

            //                 for (var i = 0; i <= result.rows.length - 1; i++) {
            //                     dev_uid = result.rows.item(i).devc_dev_id;
            //                     dev_uid = zeroFill(dev_uid, 8);
            //                 }
            //                 var temp = 0;
            //                 var query = "INSERT INTO log_box (indextom,driver_id,driver_domain,truck_id, ship_id,spot_id,lang_page,spotc_scenario,id_box,driver_name,country_number,driver_identify,id_identify,serial_box,exp_month,bdate,license_type,gender,office_branch,truck_start,lat_box,long_box,consum_box,fuel_box,speed_box,angle_box,fix_box,led_status,battery_status,device_status,sendtom_status,sendbox_status,gps_timestamp,timestamp_box,timestamp) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            //                 for (var i = 0; i < len; i++) {
            //                     ///////////////////
            //                     if (json.LogData[i].sendbox_status) {
            //                         json.LogData[i].sendbox_status = "C";
            //                     }
            //                     /////////////////////// generate
            //                     index = indextom.substring(14, 18);
            //                     dbtime = indextom.substring(0, 6);
            //                     if (index == "9999") { // เcheck indextom = 9999
            //                         index = "0";
            //                     }
            //                     if (settime == dbtime) {
            //                         runnum = (parseInt(index) + 1).toString();
            //                         fill = zeroFill(runnum, 4);
            //                         indextom = settime.toString() + dev_uid.toString() + fill;

            //                     } else {
            //                         fill = zeroFill((i + 1), 4);
            //                         indextom = settime.toString() + dev_uid.toString() + fill;

            //                     }
            //                     $cordovaSQLite.execute(db, query, [indextom,
            //                         json.LogData[i].driver_id,
            //                         json.LogData[i].domain_id,
            //                         json.LogData[i].truck_id,
            //                         json.LogData[i].ship_id,
            //                         json.LogData[i].spot_id,
            //                         json.LogData[i].lang_page,
            //                         json.LogData[i].spotc_scenario,
            //                         json.LogData[i].id_box,
            //                         json.LogData[i].driver_name,
            //                         json.LogData[i].country_number,
            //                         json.LogData[i].driver_identify,
            //                         json.LogData[i].id_identify,
            //                         json.LogData[i].serial_box,
            //                         json.LogData[i].exp_month,
            //                         json.LogData[i].bdate,
            //                         json.LogData[i].license_type,
            //                         json.LogData[i].gender,
            //                         json.LogData[i].office_branch,
            //                         json.LogData[i].truck_start,
            //                         json.LogData[i].lat_box,
            //                         json.LogData[i].long_box,
            //                         json.LogData[i].consum_box,
            //                         json.LogData[i].fuel_box,
            //                         json.LogData[i].speed_box,
            //                         json.LogData[i].angle_box,
            //                         json.LogData[i].fix_box,
            //                         json.LogData[i].led_status,
            //                         json.LogData[i].battery_status,
            //                         json.LogData[i].device_status,
            //                         json.LogData[i].sendtom_status,
            //                         json.LogData[i].sendbox_status,
            //                         json.LogData[i].gpstime_box,
            //                         json.LogData[i].timestamp_box,
            //                         timestamp
            //                     ]).then(function(res) {
            //                         console.log("****** insert setlog_box_data ok *********");
            //                         number++
            //                         if (number == len) {
            //                             callback(1);
            //                         }
            //                     }, function(err) {
            //                         number++
            //                         if (number == len) {
            //                             callback(0);
            //                         }
            //                         console.log("************** insert setlog_box_data error**************");
            //                     });

            //                 }
            //             }

            //         })

            //     })


            // },
            // selectindex: function(callback) {
            //     var queryy = "SELECT indextom FROM log_box ORDER BY id DESC ";
            //     $cordovaSQLite.execute(db, queryy, []).then(function(result) {
            //         if (result.rows.length > 0) {
            //             indextom = result.rows.item(0).indextom;
            //             //console.log(indextom); 
            //             callback(indextom);
            //         } else {
            //             callback(0);
            //         }

            //     })
            // },


            // getlog_box_data: function(callback) {
            //     var json = {
            //         "ReturnCode": 1,
            //         "LogData": []
            //     }
            //     var queryy = "SELECT * FROM log_box WHERE sendtom_status = ? ORDER BY id ASC";
            //     $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
            //         if (result.rows.length > 0) {
            //             json.LogData = [];
            //             for (var i = 0; i <= result.rows.length - 1; i++) {

            //                 json.LogData.push({
            //                     indextom: result.rows.item(i).indextom,
            //                     driver_id: result.rows.item(i).driver_id,
            //                     domain_id: result.rows.item(i).driver_domain,
            //                     truck_id: result.rows.item(i).truck_id,
            //                     ship_id: result.rows.item(i).ship_id,
            //                     spot_id: result.rows.item(i).spot_id,
            //                     lang_page: result.rows.item(i).lang_page,
            //                     spotc_scenario: result.rows.item(i).spotc_scenario,
            //                     id_box: result.rows.item(i).id_box,
            //                     driver_name: result.rows.item(i).driver_name,
            //                     country_number: result.rows.item(i).country_number,
            //                     driver_identify: result.rows.item(i).driver_identify,
            //                     id_identify: result.rows.item(i).id_identify,
            //                     serial_box: result.rows.item(i).serial_box,
            //                     exp_month: result.rows.item(i).exp_month,
            //                     bdate: result.rows.item(i).bdate,
            //                     license_type: result.rows.item(i).license_type,
            //                     gender: result.rows.item(i).gender,
            //                     office_branch: result.rows.item(i).office_branch,
            //                     truck_start: result.rows.item(i).truck_start,
            //                     lat_box: result.rows.item(i).lat_box,
            //                     long_box: result.rows.item(i).long_box,
            //                     //consum_box: result.rows.item(i).consum_box,
            //                     fuel_box: result.rows.item(i).fuel_box,
            //                     speed_box: result.rows.item(i).speed_box,
            //                     angle_box: result.rows.item(i).angle_box,
            //                     fix_box: result.rows.item(i).fix_box,
            //                     led_status: result.rows.item(i).led_status,
            //                     battery_status: result.rows.item(i).battery_status,
            //                     gpstime_box: result.rows.item(i).gps_timestamp,
            //                     timestamp_box: result.rows.item(i).timestamp_box,
            //                     device_status: result.rows.item(i).device_status,
            //                     sendtom_status: result.rows.item(i).sendtom_status,
            //                     sendbox_status: result.rows.item(i).sendbox_status,
            //                     timestamp: result.rows.item(i).timestamp

            //                 })
            //             }
            //         } else {
            //             json.ReturnCode = 0;
            //         }
            //         // console.log(json);
            //         callback(json);
            //     })
            // },


            // updatelog_box_data: function(indextom, sendtom_status, callback) {
            //     console.log('updatelog_box_data start');
            //     $ionicPlatform.ready(function() {
            //         var log_actionStatus = '';
            //         var query = "SELECT * FROM log_box WHERE indextom=?";
            //         $cordovaSQLite.execute(db, query, [indextom]).then(function(result) {
            //             if (result.rows.length > 0) {
            //                 //console.log(result.rows.length + " rows found. updatelog_box_data");
            //                 var query = "UPDATE log_box SET sendtom_status =? WHERE indextom = ?";
            //                 $cordovaSQLite.execute(db, query, [sendtom_status, indextom]).then(function(result) {
            //                     console.log("-------Update updatelog_box_data OK---------");
            //                     updatelog_box_dataStatus = '1';
            //                 }, function(error) {
            //                     console.log("-------Update updatelog_box_data fail!---------");
            //                     updatelog_box_dataStatus = '0';
            //                 });

            //             }
            //             setTimeout(function() {
            //                 //console.log(log_actionStatus)                            
            //                 callback(updatelog_box_dataStatus); //callback after 1 seconds for some reason
            //             }, 1000);
            //         })
            //     })
            // },
            setlog_spot: function(ship_id, spot_id, scenarioID, lat, long, callback) {
                timestamp = getTimeStamp();
                        var query = "INSERT INTO log_spot (ship_id,spot_id,scenarioID,sendtom_status,timestamp,lat,long) values(?,?,?,?,?,?,?)";
                        $cordovaSQLite.execute(db, query, [ship_id, spot_id, scenarioID, 'P', timestamp, lat, long]).then(function(result) {
                            console.log("--------------setlog_spot Insert OK----------------");
                            console.log(result)
                            callback(1);
                            
                        }, function(error) {
                            console.log("--------------setlog_spot Insert fail!------------");
                            callback(0);
                            
                        });

            },
            getlog_spot: function(callback) {
                var json = {
                    "ReturnCode": 1,
                    "LogSpot": []
                }
                var queryy = "SELECT * FROM log_spot WHERE sendtom_status = ? ORDER BY timestamp";
                $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
                    if (result.rows.length > 0) {
                        for (var i = 0; i <= result.rows.length - 1; i++) {

                            json.LogSpot.push({
                                id: result.rows.item(i).id,
                                ship_id: result.rows.item(i).ship_id,
                                spot_id: result.rows.item(i).spot_id,
                                scenarioID: result.rows.item(i).scenarioID,
                                sendtom_status: result.rows.item(i).sendtom_status,
                                timestamp: result.rows.item(i).timestamp,
                                lat: result.rows.item(i).lat,
                                long: result.rows.item(i).long
                            })
                            if(i==result.rows.length - 1){
                               callback(json); 
                           }                            
                        }

                    } else {
                        json.ReturnCode = 0;
                        callback(json);
                    }
                    
                })

            },
            updatelog_spot: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.LogSpot.length; i++) {
                        var query = "UPDATE log_spot SET sendtom_status =? WHERE id = ?";
                        $cordovaSQLite.execute(db, query, ['C', json.LogSpot[i].id]).then(function(result) {
                            console.log("-------Update updatelog_spot OK---------");
                            updatelog_spotStatus = '1';
                            callback(updatelog_spotStatus);
                        }, function(error) {
                            console.log("-------Update updatelog_spot fail!---------");
                            updatelog_spotStatus = '0';
                            callback(updatelog_spotStatus);
                        });
                    }

                })

            },

            setlog_mile: function(ship_id, spot_id, mile, scenarioID, callback) {
                timestamp = getTimeStamp();
                var query = "INSERT INTO log_mile (ship_id,spot_id,mile,scenarioID,sendtom_status,timestamp) values(?,?,?,?,?,?)";
                $cordovaSQLite.execute(db, query, [ship_id, spot_id, mile, scenarioID, 'P', timestamp]).then(function(result) {
                    console.log("--------------setlog_mile Insert OK----------------");
                    callback(1);
                    
                }, function(error) {
                    console.log("--------------setlog_mile Insert fail!------------");
                    callback(0);
                    
                });

            },
            getlog_mile: function(callback) {
                var json = {
                    "ReturnCode": 1,
                    "LogMile": []
                }
                var queryy = "SELECT * FROM log_mile WHERE sendtom_status = ? ORDER BY timestamp";
                $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
                    if (result.rows.length > 0) {
                        for (var i = 0; i <= result.rows.length - 1; i++) {

                            json.LogMile.push({
                                id: result.rows.item(i).id,
                                ship_id: result.rows.item(i).ship_id,
                                spot_id: result.rows.item(i).spot_id,
                                mile: result.rows.item(i).mile,
                                scenarioid: result.rows.item(i).scenarioID,
                                sendtom_status: result.rows.item(i).sendtom_status,
                                timestamp: result.rows.item(i).timestamp
                            })
                             if(i==result.rows.length - 1){
                               callback(json); 
                           }   
                        }
                    } else {
                        json.ReturnCode = 0;
                         callback(json);
                    };
                })

            },
            updatelog_mile: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.LogMile.length; i++) {
                        var query = "UPDATE log_mile SET sendtom_status =? WHERE id = ?";
                        $cordovaSQLite.execute(db, query, ['C', json.LogMile[i].id]).then(function(result) {
                            console.log("-------Update updatelog_mile OK---------");
                            updatelog_mileStatus = '1';
                            callback(updatelog_mileStatus); 
                        }, function(error) {
                            console.log("-------Update updatelog_mile fail!---------");
                            updatelog_mileStatus = '0';
                            callback(updatelog_mileStatus); 
                        });
                    }

                })

            },

            setlog_image: function(json, callback) {

                timestamp = getTimeStamp();
                for (i = 0; i < json.LogImage.length; i++) {
                    var query = "INSERT INTO log_image (ship_id,spot_id,pro_id,procause_id,pro_code,image,scenarioID,sendtom_status,timestamp) values(?,?,?,?,?,?,?,?,?)";
                    $cordovaSQLite.execute(db, query, [json.LogImage[i].ship_id, json.LogImage[i].spot_id, json.LogImage[i].pro_id, json.LogImage[i].procause_id, json.LogImage[i].pro_code, json.LogImage[i].binaryimage, json.LogImage[i].scenarioID, 'P', timestamp]).then(function(result) {
                        console.log("--------------setlog_image Insert OK----------------");
                        setlog_imageStatus = 1;
                        callback(setlog_imageStatus);
                    }, function(error) {
                        console.log("--------------setlog_image Insert fail!------------");
                        setlog_imageStatus = 0;
                        callback(setlog_imageStatus);
                    });
                }
            },
            getlog_image: function(callback) {
                var json = {
                    "ReturnCode": 1,
                    "LogImage": []
                }
                var queryy = "SELECT * FROM log_image WHERE sendtom_status = ? ORDER BY timestamp";
                $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
                    if (result.rows.length > 0) {
                        for (var i = 0; i <= result.rows.length - 1; i++) {

                            json.LogImage.push({
                                id: result.rows.item(i).id,
                                ship_id: result.rows.item(i).ship_id,
                                spot_id: result.rows.item(i).spot_id,
                                pro_id: result.rows.item(i).pro_id,
                                procause_id: result.rows.item(i).procause_id,
                                pro_code: result.rows.item(i).pro_code,
                                binaryimage: result.rows.item(i).image,
                                scenarioID: result.rows.item(i).scenarioID,
                                sendtom_status: result.rows.item(i).sendtom_status,
                                timestamp: result.rows.item(i).timestamp
                            })
                            if(i==result.rows.length - 1)
                            {
                                 callback(json);
                            }
                        }
                    } else {
                        json.ReturnCode = 0;
                         callback(json);
                    }
                })

            },
            updatelog_image: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.LogImage.length; i++) {
                        var query = "UPDATE log_image SET sendtom_status =? WHERE id = ?";
                        $cordovaSQLite.execute(db, query, ['C', json.LogImage[i].id]).then(function(result) {
                            console.log("-------Update updatelog_image OK---------");
                            updatelog_imageStatus = '1';
                            callback(updatelog_imageStatus);
                        }, function(error) {
                            console.log("-------Update updatelog_image fail!---------");
                            updatelog_imageStatus = '0';
                            callback(updatelog_imageStatus);
                        });
                    }

                })

            },
            setlog_untype: function(ship_id, spot_id, untype, scenarioID, callback) {

                timestamp = getTimeStamp();
                var query = "INSERT INTO log_untype (ship_id,spot_id,type,scenarioID,sendtom_status,timestamp) values(?,?,?,?,?,?)";
                $cordovaSQLite.execute(db, query, [ship_id, spot_id, untype, scenarioID, 'P', timestamp]).then(function(result) {
                    console.log("--------------setlog_untype Insert OK----------------");
                    setlog_untypeStatus = 1;
                    callback(setlog_untypeStatus); 
                }, function(error) {
                    console.log("--------------setlog_untype Insert fail!------------");
                    setlog_untypeStatus = 0;
                    callback(setlog_untypeStatus); 
                });
            },
            getlog_untype: function(callback) {
                var json = {
                    "ReturnCode": 1,
                    "LogUntype": []
                }
                var queryy = "SELECT * FROM log_untype WHERE sendtom_status = ? ORDER BY timestamp";
                $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
                    if (result.rows.length > 0) {
                        for (var i = 0; i <= result.rows.length - 1; i++) {

                            json.LogUntype.push({
                                id: result.rows.item(i).id,
                                ship_id: result.rows.item(i).ship_id,
                                spot_id: result.rows.item(i).spot_id,
                                untype: result.rows.item(i).type,
                                scenarioID: result.rows.item(i).scenarioID,
                                sendtom_status: result.rows.item(i).sendtom_status,
                                timestamp: result.rows.item(i).timestamp
                            })
                            if(i==result.rows.length - 1)
                            {
                                 callback(json);
                            }
                        }
                    } else {
                        json.ReturnCode = 0;
                         callback(json);
                    }
                })

            },
            updatelog_untype: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.LogUntype.length; i++) {
                        var query = "UPDATE log_untype SET sendtom_status =? WHERE id = ?";
                        $cordovaSQLite.execute(db, query, ['C', json.LogUntype[i].id]).then(function(result) {
                            console.log("-------Update updatelog_image OK---------");
                            updatelog_untypeStatus = '1';
                            callback(updatelog_untypeStatus);
                        }, function(error) {
                            console.log("-------Update updatelog_image fail!---------");
                            updatelog_untypeStatus = '0';
                            callback(updatelog_untypeStatus);
                        });
                    }

                })

            },
            setlog_procause: function(ship_id, spot_id,scenarioID, pro_id, procause_id, pro_code, num_procause_bt, num_procause_pk, callback) {

                timestamp = getTimeStamp();
                var query = "INSERT INTO log_procause (ship_id,spot_id,pro_id,scenarioID,procause_id,pro_code,num_procause_bt,num_procause_pk,sendtom_status,timestamp) values(?,?,?,?,?,?,?,?,?,?)";
                $cordovaSQLite.execute(db, query, [ship_id, spot_id,scenarioID, pro_id, procause_id, pro_code, num_procause_bt, num_procause_pk, 'P', timestamp]).then(function(result) {
                    console.log("--------------setlog_procause Insert OK----------------");
                    setlog_procauseStatus = 1;
                    callback(setlog_procauseStatus);
                }, function(error) {
                    console.log("--------------setlog_procause Insert fail!------------");
                    setlog_procauseStatus = 0;
                    callback(setlog_procauseStatus);
                });

            },
            getlog_procause: function(callback) {
                var json = {
                    "ReturnCode": 1,
                    "LogProCause": []
                }
                var queryy = "SELECT * FROM log_procause WHERE sendtom_status = ? ORDER BY timestamp";
                $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
                    if (result.rows.length > 0) {
                        for (var i = 0; i <= result.rows.length - 1; i++) {

                            json.LogProCause.push({
                                id: result.rows.item(i).id,
                                ship_id: result.rows.item(i).ship_id,
                                spot_id: result.rows.item(i).spot_id,
                                scenarioID: result.rows.item(i).scenarioID,
                                pro_id: result.rows.item(i).pro_id,
                                procause_id: result.rows.item(i).procause_id,
                                pro_code: result.rows.item(i).pro_code,
                                num_procause_bt: result.rows.item(i).num_procause_bt,
                                num_procause_pk: result.rows.item(i).num_procause_pk,
                                sendtom_status: result.rows.item(i).sendtom_status,
                                timestamp: result.rows.item(i).timestamp
                            })
                            if(i==result.rows.length - 1)
                            {
                                  callback(json);
                            }
                        }
                    } else {
                        json.ReturnCode = 0;
                          callback(json);
                    }
                })

            },
            updatelog_procause: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.LogProCause.length; i++) {
                        var query = "UPDATE log_procause SET sendtom_status =? WHERE id = ?";
                        $cordovaSQLite.execute(db, query, ['C', json.LogProCause[i].id]).then(function(result) {
                            console.log("-------Update updatelog_procause OK---------");
                            updatelog_procauseStatus = '1';
                            callback(updatelog_procauseStatus);
                        }, function(error) {
                            console.log("-------Update updatelog_procause fail!---------");
                            updatelog_procauseStatus = '0';
                            callback(updatelog_procauseStatus);
                        });
                    }

                })

            },


            setlog_otp: function(ship_id, spot_id, otp, scenarioID, callback) {
                timestamp = getTimeStamp();
                var query = "INSERT INTO log_otp (ship_id,spot_id,otp,scenarioID,sendtom_status,timestamp) values(?,?,?,?,?,?)";
                $cordovaSQLite.execute(db, query, [ship_id, spot_id, otp, scenarioID, 'P', timestamp]).then(function(result) {
                    console.log("--------------setlog_otp Insert OK----------------");
                    setlog_otpStatus = 1;
                     callback(setlog_otpStatus); 
                }, function(error) {
                    console.log("--------------setlog_otp Insert fail!------------");
                    setlog_otpStatus = 0;
                     callback(setlog_otpStatus); 
                });

            },
            getlog_otp: function(callback) {
                var json = {
                    "ReturnCode": 1,
                    "LogOtp": []
                }
                var queryy = "SELECT * FROM log_otp WHERE sendtom_status = ? ORDER BY timestamp";
                $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
                    if (result.rows.length > 0) {
                        for (var i = 0; i <= result.rows.length - 1; i++) {

                            json.LogOtp.push({
                                id: result.rows.item(i).id,
                                ship_id: result.rows.item(i).ship_id,
                                spot_id: result.rows.item(i).spot_id,
                                otp: result.rows.item(i).otp,
                                scenarioid: result.rows.item(i).scenarioID,
                                sendtom_status: result.rows.item(i).sendtom_status,
                                timestamp: result.rows.item(i).timestamp
                            })
                        }
                        if(i==result.rows.length - 1)
                        {
                            callback(json);
                        }
                    } else {
                        json.ReturnCode = 0;
                        callback(json);
                    }
                })

            },
            updatelog_otp: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.LogOtp.length; i++) {
                        var query = "UPDATE log_otp SET sendtom_status =? WHERE id = ?";
                        $cordovaSQLite.execute(db, query, ['C', json.LogOtp[i].id]).then(function(result) {
                            console.log("-------Update updatelog_otp OK---------");
                            updatelog_otpStatus = '1';
                            callback(updatelog_otpStatus); 
                        }, function(error) {
                            console.log("-------Update updatelog_otp fail!---------");
                            updatelog_otpStatus = '0';
                            callback(updatelog_otpStatus); 
                        });
                    }

                })

            },
            setlog_returnware: function(ship_id, spot_id, rew_id, num_rew, scenarioID, callback) {
                timestamp = getTimeStamp();
                var query = "INSERT INTO log_returnware (ship_id,spot_id,rew_id,num_rew,scenarioID,sendtom_status,timestamp) values(?,?,?,?,?,?,?)";
                $cordovaSQLite.execute(db, query, [ship_id, spot_id, rew_id, num_rew, scenarioID, 'P', timestamp]).then(function(result) {
                    console.log("--------------setlog_returnware Insert OK----------------");
                    setlog_returnwareStatus = 1;
                    callback(setlog_returnwareStatus); 
                }, function(error) {
                    console.log("--------------setlog_returnware Insert fail!------------");
                    setlog_returnwareStatus = 0;
                    callback(setlog_returnwareStatus); 
                });
            },
            getlog_returnware: function(callback) {
                var json = {
                    "ReturnCode": 1,
                    "LogReware": []
                }
                var queryy = "SELECT * FROM log_returnware WHERE sendtom_status = ? ORDER BY timestamp";
                $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
                    if (result.rows.length > 0) {
                        for (var i = 0; i <= result.rows.length - 1; i++) {

                            json.LogReware.push({
                                id: result.rows.item(i).id,
                                ship_id: result.rows.item(i).ship_id,
                                spot_id: result.rows.item(i).spot_id,
                                rew_id: result.rows.item(i).rew_id,
                                num_rew: result.rows.item(i).num_rew,
                                scenarioid: result.rows.item(i).scenarioID,
                                sendtom_status: result.rows.item(i).sendtom_status,
                                timestamp: result.rows.item(i).timestamp
                            })
                            if(i==result.rows.length - 1)
                            {
                                 callback(json);
                            }
                        }
                    } else {
                        json.ReturnCode = 0;
                         callback(json);
                    }
                })

            },
            updatelog_returnware: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.LogReware.length; i++) {
                        var query = "UPDATE log_returnware SET sendtom_status =? WHERE id = ?";
                        $cordovaSQLite.execute(db, query, ['C', json.LogReware[i].id]).then(function(result) {
                            console.log("-------Update updatelog_returnware OK---------");
                            updatelog_returnwareStatus = '1';
                            callback(updatelog_returnwareStatus);
                        }, function(error) {
                            console.log("-------Update updatelog_returnware fail!---------");
                            updatelog_returnwareStatus = '0';
                            callback(updatelog_returnwareStatus);
                        });
                    }

                })

            },
            clearlog: function(callback) {
                var json=[];
                var j=0;
                  //json.push(  'log_box' ); 
                  json.push(  'log_spot' ); 
                   json.push(  'log_mile' ); 
                   json.push(  'log_image' ); 
                   json.push(  'log_untype' ); 
                   json.push(  'log_procause' ); 
                  json.push(  'log_otp' ); 
                  json.push(  'log_returnware' ); 
                    json.push(  'log_safemate' ); 
                      json.push(  'log_proreturn' ); 

                    $ionicPlatform.ready(function() {
                    for (var i = 0; i < json.length; i++) {    
                        var query = "DELETE FROM "+json[i]+" WHERE timestamp <= date('now','-7 day') AND sendtom_status=?";            
                        $cordovaSQLite.execute(db, query, ['C']).then(function(result) { 
                            console.log("-------clearlog "+json[j]+" OK---------"); 
                            if(j==json.length-1)
                            {
                                callback(1);
                            }
                             j++;  
                        }, function(error) {
                            console.log("-------clearlog "+json[j]+" fail!---------"); 
                            console.error(error);
                            callback(0);
                        });
                    }

                })
               
            },
            clearjob: function(callback) {
                var query = "UPDATE log_action SET spotc_scenario =?,lang_page =?,numship =?,pre_mile =?,lastsend_tom_record =?";
                $cordovaSQLite.execute(db, query, ["", "", "", "", ""]).then(function(result) {
                    console.log("-------Update clearjob OK---------");
                    callback(1);
                }, function(error) {
                    console.log("-------Update clearjob fail!---------");
                    callback(0);
                });
            },
            selectindextom: function(callback) {
                try {
                    var queryy = "SELECT indextom FROM log_safemate ORDER BY id_safemate DESC ";
                    $cordovaSQLite.execute(db, queryy, []).then(function(result) {
                        if (result.rows.length > 0) {
                            indextom = result.rows.item(0).indextom;
                            //console.log(indextom); 
                            callback(indextom);
                        } else {
                            callback(0);
                        }

                    })
                } catch (error) {
                    console.log(error);
                    callback(0);
                }

            },
            setlog_safemate: function(json, indextom, callback) {
                len = json.LogSafemate.length;

                if (indextom == 0) {
                    indextom = '000000000000000000';
                }

                function getTime() {
                    var now = new Date();
                    if( (now.getMonth() + 1).toString().length == 1){
                        month = '0'+(now.getMonth() + 1).toString();
                    }else{
                        month = (now.getMonth() + 1).toString();
                    }
                    if((now.getDate()).toString().length == 1){
                        day = '0'+(now.getDate()).toString();
                    }else{
                        day = (now.getDate()).toString();
                    }
                    year = now.getFullYear().toString().substring(2,4);
                    return (year+month+day);
                }
                timestamp = getTimeStamp();
                time = getTime();
                var number = 0;
                j = 0;
      
                $ionicPlatform.ready(function() {
                    var q = "SELECT devc_dev_id FROM tb_device_config";
                    $cordovaSQLite.execute(db, q, []).then(function(result) {
                        if (result.rows.length > 0) {
                            
                            for (var i = 0; i <= result.rows.length - 1; i++) {
                                dev_uid = result.rows.item(i).devc_dev_id;
                                gendev_uid = zeroFill(dev_uid, 8);
                            }
                            
                            var temp = 0;
                            var query = "INSERT INTO log_safemate (indextom,driver_id,driver_domain,dev_uid,ship_id,spot_id,speed_safemate,lat_safemate,long_safemate,noti_sb,noti_sa,noti_st,noti_sc,noti_os,sendtom_status,timestamp_safemate,timestamp) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                            for (var i = 0; i < len; i++) {
                                console.error(indextom);
                                ///////////////////
                                /////////////////////// generate
                                index = indextom.substring(14, 18);
                                dbtime = indextom.substring(0, time.length);
                                if (index == "9999") { // เcheck indextom = 9999
                                    index = "0";
                                }
                                if (time == dbtime) {
                                    runnum = (parseInt(index) + 1).toString();
                                    fill = zeroFill(runnum, 4);
                                    indextom = time.toString() + gendev_uid.toString() + fill;

                                } else {
                                    fill = zeroFill((i + 1), 4);
                                    indextom = time.toString() + gendev_uid.toString() + fill;

                                }
                                $cordovaSQLite.execute(db, query, [indextom,
                                    $localStorage.UserNo,
                                    $localStorage.domain_id,
                                    dev_uid,
                                    json.LogSafemate[i].ship_id,
                                    json.LogSafemate[i].spot_id,
                                    json.LogSafemate[i].speed_safemate,
                                    json.LogSafemate[i].lat_safemate,
                                    json.LogSafemate[i].long_safemate,
                                    json.LogSafemate[i].noti_sb,
                                    json.LogSafemate[i].noti_sa,
                                    json.LogSafemate[i].noti_st,
                                    json.LogSafemate[i].noti_sc,
                                    json.LogSafemate[i].noti_os,
                                    'P',
                                    json.LogSafemate[i].timestamp_safemate,
                                    timestamp
                                ]).then(function(res) {
                                    console.log("****** insert setlog_safemate ok *********");
                                    number++
                                    if (number == len) {
                                        callback(1);
                                    }
                                }, function(err) {
                                    number++
                                    if (number == len) {
                                        callback(0);
                                    }
                                    console.log("************** insert setlog_safemate error**************");
                                });

                            }
                        }

                    })

                })


            },
            getlog_safemate: function(callback) {
                var json = {
                    "ReturnCode": 1,
                    "LogSafemate": []
                }
                var queryy = "SELECT * FROM log_safemate WHERE sendtom_status = ? ORDER BY timestamp";
                $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
                    if (result.rows.length > 0) {
                        for (var i = 0; i <= result.rows.length - 1; i++) {

                            json.LogSafemate.push({
                                indextom: result.rows.item(i).indextom,
                                driver_id: result.rows.item(i).driver_id,
                                driver_domain: result.rows.item(i).driver_domain,
                                dev_uid: result.rows.item(i).dev_uid,
                                ship_id: result.rows.item(i).ship_id,
                                spot_id: result.rows.item(i).spot_id,
                                id_safemate: result.rows.item(i).id_safemate,
                                speed_safemate: result.rows.item(i).speed_safemate,
                                noti_sb: result.rows.item(i).noti_sb,
                                noti_sa: result.rows.item(i).noti_sa,
                                noti_st: result.rows.item(i).noti_st,
                                noti_sc: result.rows.item(i).noti_sc,
                                noti_os: result.rows.item(i).noti_os,
                                lat_safemate: result.rows.item(i).lat_safemate,
                                long_safemate: result.rows.item(i).long_safemate,
                                timestamp_safemate: result.rows.item(i).timestamp_safemate,
                                sendtom_status: result.rows.item(i).sendtom_status,
                                timestamp: result.rows.item(i).timestamp
                            })
                            if(i==result.rows.length - 1)
                            {
                                callback(json);
                            }
                        }
                    } else {
                        json.ReturnCode = 0;
                        callback(json);
                    }
                })
            },
            updatelog_safemate: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.LogSafemate.length; i++) {
                        var query = "UPDATE log_safemate SET sendtom_status =? WHERE indextom = ?";
                        $cordovaSQLite.execute(db, query, ['C', json.LogSafemate[i].indextom]).then(function(result) {
                            console.log("-------Update updatelog_safemate OK---------");
                            updatelog_safemateStatus = '1';
                            callback(updatelog_safemateStatus);
                        }, function(error) {
                            console.log("-------Update updatelog_safemate fail!---------");
                            updatelog_safemateStatus = '0';
                            callback(updatelog_safemateStatus);
                        });
                    }

                })
            },

            selectNoti: function(callback) {
                $ionicPlatform.ready(function() {
                    var json = [];
                    var queryy = "SELECT * FROM NotiSafemate WHERE status=?";
                    $cordovaSQLite.execute(db, queryy, ['1']).then(function(result) {
                        if (result.rows.length > 0) {
                            for (var i = 0; i <= result.rows.length - 1; i++) {
                                json.push({
                                    id: result.rows.item(i).id,
                                    speed_safemate: result.rows.item(i).speed_safemate,
                                    lat_safemate: result.rows.item(i).lat_safemate,
                                    long_safemate: result.rows.item(i).long_safemate,
                                    timestamp_safemate: result.rows.item(i).timestamp_safemate,
                                    noti_sb: result.rows.item(i).noti_sb,
                                    noti_sa: result.rows.item(i).noti_sa,
                                    noti_st: result.rows.item(i).noti_st,
                                    noti_sc: result.rows.item(i).noti_sc,
                                    noti_os: result.rows.item(i).noti_os,
                                    status: result.rows.item(i).status
                                })
                                if(i==result.rows.length - 1)
                                {
                                    callback(json);
                                }
                            }
                        } else{
                                callback(0);
                            }
                    });
                })
            },
            selectConfig: function(callback) {
                $ionicPlatform.ready(function() {
                    var json = [];
                    var queryy = "SELECT * FROM ConfigSafemate";
                    $cordovaSQLite.execute(db, queryy, []).then(function(result) {
                        if (result.rows.length > 0) {
                            for (var i = 0; i <= result.rows.length - 1; i++) {
                                json.push({
                                    intervalStatus: result.rows.item(i).intervalStatus,
                                    time: result.rows.item(i).time,
                                    overSpeedLimit: result.rows.item(i).overSpeedLimit  

                               })
                                if(i==result.rows.length - 1)
                                {
                                    callback(json);
                                }
                            }
                        } else {
                            json.push('no rows');
                            callback(json);
                        }
                    });
                })
            },



            updateConfig_OverSpeedLimit: function(overSpeedLimit, callback) {
                $ionicPlatform.ready(function() {
                    var query = "UPDATE ConfigSafemate SET overSpeedLimit =?";
                    $cordovaSQLite.execute(db, query, [overSpeedLimit]).then(function(result) {
                        console.log("-------Update updateConfig_OverSpeedLimit OK---------");
                        updateConfig_OverSpeedLimit = '1';
                         callback(updateConfig_OverSpeedLimit);
                    }, function(error) {
                        console.log("-------Update updateConfig_OverSpeedLimit fail!---------");
                        updateConfig_OverSpeedLimit = '0';
                         callback(updateConfig_OverSpeedLimit);
                    });

                })

            },

            updateConfig_IntervalStatus: function(intervalStatus, callback) {
                $ionicPlatform.ready(function() {
                    var query = "UPDATE ConfigSafemate  SET intervalStatus=?";
                    $cordovaSQLite.execute(db, query, [intervalStatus]).then(function(result) {
                        console.log("-------Update updateConfig_IntervalStatus OK---------");
                        updateConfig_IntervalStatus = '1';
                        callback(updateConfig_IntervalStatus); 
                    }, function(error) {
                        console.log("-------Update updateConfig_IntervalStatus fail!---------");
                        updateConfig_IntervalStatus = '0';
                        callback(updateConfig_IntervalStatus); 
                    });

                })
            },
            updateConfig_IntervalTime: function(intervalTime, callback) {
                $ionicPlatform.ready(function() {
                    var query = "UPDATE ConfigSafemate  SET time=?";
                    $cordovaSQLite.execute(db, query, [intervalTime]).then(function(result) {
                        console.log("-------Update updateConfig_IntervalTime OK---------");
                        updateConfig_IntervalTime = '1';
                         callback(updateConfig_IntervalTime);
                    }, function(error) {
                        console.log("-------Update updateConfig_IntervalTime fail!---------");
                        updateConfig_IntervalTime = '0';
                         callback(updateConfig_IntervalTime);
                    });

                })

            },

            updateNoti: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.length; i++) {
                        var query = "UPDATE NotiSafemate SET status =? WHERE  id = ?";
                        $cordovaSQLite.execute(db, query, [0, json[i].id]).then(function(result) {
                            console.log("-------Update updateNoti OK---------");
                            updateNoti = '1';
                            callback(updateNoti);
                        }, function(error) {
                            console.log("-------Update updateNoti fail!---------");
                            updateNoti = '0';
                            callback(updateNoti);
                        });
                    }

                })

            },

            setlog_proreturn: function(ship_id, spot_id,scenarioID, pro_id, returncase_id, pro_code, proretrun_bt, proretrun_pk,remark, callback) {

                timestamp = getTimeStamp();
                var query = "INSERT INTO log_proreturn (ship_id,spot_id,scenarioID,pro_id,returncase_id,pro_code,proretrun_bt,proretrun_pk,sendtom_status,remark,timestamp) values(?,?,?,?,?,?,?,?,?,?,?)";
                $cordovaSQLite.execute(db, query, [ship_id, spot_id,scenarioID, pro_id, returncase_id, pro_code, proretrun_bt, proretrun_pk, 'P',remark, timestamp]).then(function(result) {
                    console.log("--------------setlog_proreturn Insert OK----------------");
                    setlog_proreturnStatus = 1;
                      callback(setlog_proreturnStatus);
                    
                }, function(error) {
                    console.log("--------------setlog_proreturn Insert fail!------------");
                    console.error(error);
                    setlog_proreturnStatus = 0;
                      callback(setlog_proreturnStatus);
                    
                });
            },
            getlog_proreturn: function(callback) {
                var json = {
                    "ReturnCode": 1,
                    "LogReturnCase": []
                }
                var queryy = "SELECT * FROM log_proreturn WHERE sendtom_status = ? ORDER BY timestamp";
                $cordovaSQLite.execute(db, queryy, ['P']).then(function(result) {
                    if (result.rows.length > 0) {
                        for (var i = 0; i <= result.rows.length - 1; i++) {

                            json.LogReturnCase.push({
                                id: result.rows.item(i).id,
                                ship_id: result.rows.item(i).ship_id,
                                spot_id: result.rows.item(i).spot_id,
                                scenarioID: result.rows.item(i).scenarioID,
                                pro_id: result.rows.item(i).pro_id,
                                returncase_id: result.rows.item(i).returncase_id,
                                pro_code: result.rows.item(i).pro_code,
                                proretrun_bt: result.rows.item(i).proretrun_bt,
                                proretrun_pk: result.rows.item(i).proretrun_pk,
                                sendtom_status: result.rows.item(i).sendtom_status,
                                remark : result.rows.item(i).remark,
                                timestamp: result.rows.item(i).timestamp
                            })
                            if(i==result.rows.length - 1)
                            {
                                callback(json);
                            }
                        }
                    } else {
                        json.ReturnCode = 0;
                        callback(json);
                    }
                })

            },
            updatelog_proreturn: function(json, callback) {
                $ionicPlatform.ready(function() {
                    for (i = 0; i < json.LogReturnCase.length; i++) {
                        var query = "UPDATE log_proreturn SET sendtom_status =? WHERE id = ?";
                        $cordovaSQLite.execute(db, query, ['C', json.LogReturnCase[i].id]).then(function(result) {
                            console.log("-------Update updatelog_proreturn OK---------");
                            updatelog_proreturnStatus = '1';
                             callback(updatelog_proreturnStatus);
                        }, function(error) {
                            console.log("-------Update updatelog_proreturn fail!---------");
                            updatelog_proreturnStatus = '0';
                             callback(updatelog_proreturnStatus);
                        });
                    }

                })

            },

        };

    }])
    //DELETE * FROM counter_ads WHERE time < NOW() - INTERVAL 24 HOUR  // delete row after 24 hour

app.factory('camera', ['$cordovaCamera', '$ionicPlatform', function($cordovaCamera, $ionicPlatform, $scope) {
    // console.log('factory camera start');
    return {

        takePhoto: function(callback) {
            // console.log('Test Camera');


            document.addEventListener("deviceready", function() {

                var options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 600,
                    targetHeight: 600,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false,
                    correctOrientation: true
                };

                $cordovaCamera.getPicture(options).then(function(imageData) {
                    var image = document.getElementById('myImage');
                    imagesrc = "data:image/jpeg;base64," + imageData;
                    callback(imagesrc);
                }, function(err) {
                    // error
                    console.log(error)
                });

            }, false);
        }

    }
}])
