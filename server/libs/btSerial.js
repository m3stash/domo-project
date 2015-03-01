'use strict';

module.exports = function(btSerial, req, res){
	console.log('DEBUT SCAN')
	var bluetoothListFound = [];
	btSerial.on('found', function(address, name) {
		console.log('SCAN FOUND -> found', address, name)
		bluetoothListFound.push({name: name, address: address});
	    btSerial.findSerialPortChannel(address, function(channel) {
	    	console.log('----', channel)
	        btSerial.connect(address, channel, function() {
	            console.log('connected');

	            btSerial.write(new Buffer('my data', 'utf-8'), function(err, bytesWritten) {
	                if (err) console.log(err);
	            });

	            btSerial.on('data', function(buffer) {
	                console.log(buffer.toString('utf-8'));
	            });
	        }, function () {
	            console.log('cannot connect');
	        });

	        // close the connection when you're ready
	        btSerial.close();
	    }, function() {
	        console.log('found nothing');
	    });
	});

	btSerial.on('failure', function(err){
		console.log('ERROR',error)
	});

	btSerial.on('data', function(buffer){
		console.log('data buffer',buffer)
	});

	btSerial.on('close', function() {
        console.log('connection has been closed (remotely?)');
    });

    btSerial.on('finished', function() {
    	res.json(bluetoothListFound)
        console.log('scan did finish');
    });

	btSerial.inquire();

}
