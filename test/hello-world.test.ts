'use strict';

import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

import helloWorld from '../src/hello-world';

chai.use(chaiAsPromised);

export const expect = chai.expect;

describe('hellowWorld', function() {
  it('returns "Hello World!"', function() {
    expect(
      helloWorld()
    ).to.be.equal('Hello World!');
  });
});
