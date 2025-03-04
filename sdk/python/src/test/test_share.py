# coding: utf-8

"""
    zrok

    zrok client access

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from zrok_api.models.share import Share

class TestShare(unittest.TestCase):
    """Share unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> Share:
        """Test Share
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `Share`
        """
        model = Share()
        if include_optional:
            return Share(
                share_token = '',
                z_id = '',
                share_mode = '',
                backend_mode = '',
                frontend_selection = '',
                frontend_endpoint = '',
                backend_proxy_endpoint = '',
                reserved = True,
                activity = [
                    zrok_api.models.spark_data_sample.sparkDataSample(
                        rx = 1.337, 
                        tx = 1.337, )
                    ],
                limited = True,
                created_at = 56,
                updated_at = 56
            )
        else:
            return Share(
        )
        """

    def testShare(self):
        """Test Share"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
